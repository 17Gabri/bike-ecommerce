<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    /**
     * @Route("/product/{id}", name="product_detail")
     */
    public function detail($id): Response
    {
        // Lee el contenido del archivo JSON
        $jsonContent = file_get_contents('data/products.json');

        // Decodifica el contenido JSON en un array asociativo
        $products = json_decode($jsonContent, true);

        // Busca el producto con el ID proporcionado en los datos del JSON
        $productData = null;
        foreach ($products as $product) {
            if ($product['id'] == $id) {
                $productData = $product;
                break;
            }
        }

        $relatedProducts = [];
        foreach ($products as $product) {
            if ($product !== $productData) {
                $relatedProducts[] = $product;
            }
        }

        // Si no se encuentra el producto, lanza una excepción o maneja el caso según sea necesario
        if (!$productData) {
            throw $this->createNotFoundException('Producto no encontrado');
        }

        // Renderiza la vista con los datos del producto
        return $this->render('product/product_detail.html.twig', [
            'product' => $productData,
            'relatedProducts' => $relatedProducts,
        ]);
    }
}

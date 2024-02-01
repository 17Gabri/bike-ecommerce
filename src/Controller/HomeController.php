<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="homepage")
     */
    public function index(): Response
    {
        // Lee los datos del archivo JSON de productos
        $jsonData = file_get_contents('data/products.json');
        $products = json_decode($jsonData, true);

        // Renderiza la plantilla Twig con los datos de los productos
        return $this->render('home/index.html.twig', [
            'products' => $products,
        ]);
    }
}

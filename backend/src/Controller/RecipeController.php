<?php

namespace App\Controller;

use App\Entity\Recipe;
use App\Repository\RecipeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class RecipeController extends AbstractController
{
    #[Route('/api/recipe', name: 'app_recipe_list', methods: ["GET"])]
    public function showRecipe(RecipeRepository $recipeRepository): JsonResponse
    {
        return $this->json($recipeRepository->findAll());
    }

    #[Route('/api/recipe', name: 'app_recipe_create', methods: ["POST"])]
    public function createRecipe(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $recipe = new Recipe();

        $recipe->setName($data['name']);
        $recipe->setDescription($data['description']);
        $recipe->setPreparationTime($data['preparationTime']);
        $recipe->setIngredients($data['ingredients']);

        $entityManager->persist($recipe);

        $entityManager->flush();

        return $this->json($recipe);
    }
}

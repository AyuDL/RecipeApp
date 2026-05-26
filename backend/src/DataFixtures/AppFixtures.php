<?php

namespace App\DataFixtures;

use App\Entity\Recipe;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $recipe1 = new Recipe();
        $recipe1->setName('Tarte aux pommes');
        $recipe1->setDescription('Une tarte aux pommes classique.');
        $recipe1->setPreparationTime(45);
        $recipe1->setIngredients('Pommes, farine, beurre, sucre, oeufs');
        $manager->persist($recipe1);

        $recipe2 = new Recipe();
        $recipe2->setName('Quiche Lorraine');
        $recipe2->setDescription('Une quiche avec lardons et fromage.');
        $recipe2->setPreparationTime(60);
        $recipe2->setIngredients('Lardons, crème fraîche, oeufs, gruyère, pâte brisée');
        $manager->persist($recipe2);

        $recipe3 = new Recipe();
        $recipe3->setName('Soupe de légumes');
        $recipe3->setDescription('Une soupe maison à manger quand tu n\'as pas trop faim.');
        $recipe3->setPreparationTime(30);
        $recipe3->setIngredients('Carottes, poireaux, pommes de terre, oignons, bouillon');
        $manager->persist($recipe3);

        $manager->flush();
    }
}

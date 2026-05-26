<?php

namespace App\Entity;

use App\Repository\RecipeRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RecipeRepository::class)]
class Recipe
{
    #[ORM\Id]
    #[ORM\GeneratedValue(strategy: 'AUTO')]
    #[ORM\Column (type: Types::INTEGER)]
    private int $uuid;

    #[ORM\Column (type: Types::STRING, length: 255)]
    private string $name;

    #[ORM\Column (type: Types::STRING, length: 255)]
    private ?string $description = null;

    #[ORM\Column (type: Types::STRING, length: 255)]
    private ?string $preparationTime = null;

    #[ORM\Column (type: Types::STRING, length: 255)]
    private string $ingredients;

    public function getUuid(): int
    {
        return $this->uuid;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): void
    {
        $this->description = $description;
    }

    public function getPreparationTime(): ?string
    {
        return $this->preparationTime;
    }

    public function setPreparationTime(?string $preparationTime): void
    {
        $this->preparationTime = $preparationTime;
    }

    public function getIngredients(): string
    {
        return $this->ingredients;
    }

    public function setIngredients(string $ingredients): void
    {
        $this->ingredients = $ingredients;
    }
}

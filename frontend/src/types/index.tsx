export interface Gender{
    id: number;
    name: string;
}

export interface Breed{
    id: number;
    name: string;
    description: string;
    image_url?: string;
    child_friendly: number;
    dog_friendly: number;
    hairless: boolean;
    health_issues: number;
    hypoallergenic: boolean;
    intelligence: number;
    short_legs: boolean;
    stranger_friendly: number;
    temperament: string;
    imperial: string;
    metric: string;
    origin: string;
    wikipedia_url?: string;
}

export interface Cat {
    id: number;
    breed: Breed;
    name: string;
    age: number;
    gender: Gender;
}

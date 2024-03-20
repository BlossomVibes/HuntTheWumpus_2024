import { world, system, BlockPermutation } from "@minecraft/server";

export class Generation {
    static runGeneration() {
        world.sendMessage("Running generatioin");

        // add tests here
        Generation.exampleGeneration();
    }

    static exampleGeneration() {
        world.sendMessage("Running generation");
        // write test code here
    }
}
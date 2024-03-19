import { world } from "@minecraft/server";

export class Tests {
    static runTests() {
        world.sendMessage("Running tests");

        // add tests here
        Tests.exampleTest();
    }

    static exampleTest() {
        world.sendMessage("Running example test");
        // write test code here
    }
}
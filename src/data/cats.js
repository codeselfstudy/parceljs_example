import * as faker from "faker";
import { random } from "lodash";

const NUM_CATS = 10;

export const cats = generateCats(NUM_CATS);

/**
 * Create some random cats
 */
function generateCats(num) {
    const output = [];
    for (let i = 0; i < num; i++) {
        output.push({
            name: faker.name.firstName(),
            age: random(1, 20),
            phoneNumber: faker.phone.phoneNumber(),
            quote: faker.hacker.phrase(),
            pic: `https://placekitten.com/${random(80, 100)}/${random(80, 100)}`,
        });
    }
    return output;
}

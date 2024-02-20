// Create a code that could handle a queue on food ordering process, with this specification:
// ● Create a class to handle queuing process in a file.
// ● Create file to handle and execute queue class.
// ● Each queue process takes a random interval from 1-10 seconds.
// ● Clue : Use while & promise

class FoodOrderQueue {
    constructor() {
        this.queue = [];
        this.isProcessing = false;
    }

    enqueue(order) {
        this.queue.push(order);
    }

    printQueue() {
        console.log("Current queue:");
        this.queue.forEach((order, index) => {
            console.log(`Queue ${index + 1}: ${order}`);
        });
    }

    async processQueue() {
        if (this.isProcessing || this.queue.length === 0) {
            return;
        }

        this.isProcessing = true;
        while (this.queue.length > 0) {
            const order = this.queue.shift();
            console.log(`Processing order: ${order}`);
            const interval = this.getRandomInterval();
            await this.delay(interval);
            console.log(`Order processed: ${order}. Done in ${interval} seconds.`);
        }
        this.isProcessing = false;
    }

    delay(seconds) {
        return new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }

    getRandomInterval() {
        return Math.floor(Math.random() * 10) + 1;
    }
}

const queue = new FoodOrderQueue();

queue.enqueue("Pizza");
queue.enqueue("Burger");
queue.enqueue("Salad");

queue.printQueue();

queue.processQueue();

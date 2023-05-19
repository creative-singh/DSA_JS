# Circular Queue Data Structure 

The size of the queue is fixed and a single block of memory is used as if the first element is connected to the last element.

Also referred to as circular buffer or ring buffer and follows the `FIFO Principle`.

A Circular Queue will reuse the empty block created during the dequeue operation.

While working with queues of fixed maximum size, a circular queue is a great implementation choice.

The circular queue data structure supports 2 main operations:

- <u>ENQUEUE</u>: Which adds an element to the rear/tail of the collection.

- <u>DEQUEUE</u>: Which removed an element from the front/head of the collection.

## Circular Queue Usage

- Clock 
- Streaming Data - *where circular queue act as a buffer()*
- Traffic Lights - *computer operated*

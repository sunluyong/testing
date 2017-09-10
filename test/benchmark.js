const Benchmark = require('benchmark');
const {
  concat,
  push
} = require('../src/api/fn');

const suite = new Benchmark.Suite;

// // add tests
// suite
//   .add('concat', () => {
//     concat('This is a test! ');
//   })
//   .add('push', () => {
//     push('This is a test! ');
//   })
//   // add listeners
//   .on('cycle', event => {
//     console.log(String(event.target));
//   })
//   .on('complete', function () {
//     console.log(`${this.filter('fastest').map('name')} is faster.`);
//   })
//   // run async
//   .run({
//     'async': true
//   });

// add tests
suite
  .add('let', () => {
    for (let i = 0; i < 10000; i++) {

    }
  })
  .add('var', () => {
    for (var i = 0; i < 10000; i++) {

    }
  })
  // add listeners
  .on('cycle', event => {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log(`${this.filter('fastest').map('name')} is faster.`);
  })
  // run async
  .run({
    'async': true
  });

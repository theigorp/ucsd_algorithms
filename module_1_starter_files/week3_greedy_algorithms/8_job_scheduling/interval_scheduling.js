function isEventCompatible(event, compatibleEvents) {
  if (compatibleEvents.length === 0) {
    return true;
  }
  return compatibleEvents.every((compatibleEvent) => event[0] >= compatibleEvent[1]);
}

function academicIntervalScheduling(events) {
  const compatibleEvents = [];
  events.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < events.length; i++) {
    if (isEventCompatible(events[i], compatibleEvents)) {
      compatibleEvents.push(events[i]);
    }
  }

  return compatibleEvents;
}

function intervalScheduling(events) {
  const compatibleEvents = [];
  events.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < events.length; i++) {
    compatibleEvents.push(events[0]);
    // remove all events that arent compatible with first compatible event
    events = events.filter((event) => event[0] >= compatibleEvents[i][1]);
  }

  return compatibleEvents.concat(events);
}
// console.time('a');
// console.log(
//   intervalScheduling([
//     [0, 6],
//     [12, 16],
//     [8, 12],
//     [8, 11],
//     [6, 10],
//     [3, 9],
//     [5, 9],
//     [3, 5],
//     [1, 4],
//     [5, 7],
//     [2, 14],
//   ])
// );
// console.timeEnd('a')
// [1,4], [5,7], [8, 11], [12,16]
// console.log(intervalScheduling([[1, 3], [2, 5], [4, 6]]));
// console.log(intervalScheduling([[1, 10], [2, 9], [3, 8], [4, 7]]));
// console.log(intervalScheduling([[1, 2], [3, 4], [5, 6], [7, 8]]));
// console.log(intervalScheduling([[1, 3], [1, 2], [1, 4]]));
// console.log(intervalScheduling([[1, 5], [2, 5], [3, 5]]));
// console.log(intervalScheduling([[1, 10], [2, 3], [4, 5], [6, 7], [8, 9]]));
// console.log(intervalScheduling([[1, 2], [2, 3], [3, 4], [1, 3], [3, 5]]));

function intervalPartitioning(events) {
  const classroomsUsed = [];
  /*
    for the most optimal solution classroomUsed should be a PriorityQueue that will sort classrooms
    by the first time they have available. (key = finish time of its last lecture)
    -  to allocate a new classroom, INSERT classroom onto priority queue.
    - to schedule lecture j in classroom k, INCREASE-KEY of classroom k to fj.
    - to determine whether lecture j is compatible with any classroom,compare sj to FIND-MIN
  */

  events.sort((a, b) => a[0] - b[0]); // greedy choice
  classroomsUsed.push([events[0]]);

  for (let i = 1; i < events.length; i++) {
    const compatibleClassroom = classroomsUsed.find((classroom) => {
      const lastScheduledLectureFinishTime = classroom[classroom.length - 1][1];
      if (lastScheduledLectureFinishTime <= events[i][0]) {
        return true;
      }
    });
    
    if (compatibleClassroom) {
      compatibleClassroom.push(events[i]);
    } else {
      classroomsUsed.push([events[i]]);
    }
  }

  return classroomsUsed;
}

// console.log(
//   intervalPartitioning([
//     [1, 3],
//     [2, 5],
//     [4, 6],
//   ])
// ); // 2
// console.log(intervalPartitioning([[1, 3], [1, 2], [1, 4]])); // 3
// console.log(
//   intervalPartitioning([
//     [0, 6],
//     [12, 16],
//     [8, 12],
//     [8, 11],
//     [6, 10],
//     [3, 9],
//     [5, 9],
//     [3, 5],
//     [1, 4],
//     [5, 7],
//     [2, 14],
//   ])
// ); //6
console.log(intervalPartitioning([[0,1], [0,2], [0,3], [1,3], [2,3], [3,5], [3,5], [5,6], [5,7], [5,7]]))

//this is the first task
function distanceFromHqInBlocks(pick_up_location){
    const hq_location = 42;
    const distance_in_block = Math.abs(pick_up_location - hq_location);
    return distance_in_block;
}
//this is the second task
function distanceFromHqInFeet(pick_up_location) {
    const feet_per_block =264;
    const distance_in_block = distanceFromHqInBlocks(pick_up_location);
    const distance_in_feet = distance_in_block * feet_per_block;
    return distance_in_feet;
}
//this is the third task
function distanceTravelledInFeet(start, end) {
    const feet_per_block =264;
    const distance_in_block = Math.abs(start - end);
    const distance_in_feet = distance_in_block * feet_per_block;
    return distance_in_feet;
}
//this is the final task
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare;
if (distance <= 400) {
    fare = 0; 
} else if (distance > 400 && distance <= 2000) {
    fare = (distance - 400) * 0.02;
} else if (distance > 2000 && distance <= 2500) {
    fare = 25; 
} else {
    fare = 'cannot travel that far';
}
return fare;
}
/*take more practise in reading tests,
review phase 0 on reading tests,
these tests dictate we write functions and they give examples pointing out how the functions should work but it doesn't need values,just the program*/
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


const StoryText = 'It was 0 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they realized it was a bad idea since it :insertz:. Bob slipped on the ice and fell since Bob — :insertx: weighs 300 pounds, and it was black ice.';

const insertx = ['Zoe', 'Papa bear', 'the Grinch'];

const inserty = ['Boulder', 'Mexico', 'the Oasis'];

const insertz = ['erupted', 'got washed away by the ocean', 'got up and walked away'];



randomize.addEventListener('click', result);

function result() {
    let newStory = StoryText;

    const xItem = randomValueFromArray(insertx);
    const yItem = randomValueFromArray(inserty);
    const zItem = randomValueFromArray(insertz);

    newStory = newStory.replaceAll(':insertx:' ,xItem);
    newStory = newStory.replaceAll(':inserty:' ,yItem);
    newStory = newStory.replaceAll(':insertz:' ,zItem);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replaceAll('Bob', name);
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300 / 14) + ' stone';
        const temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';

        newStory = newStory.replaceAll('0 fahrenheit', temperature);
        newStory = newStory.replaceAll('300 pounds', weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
const tabsLink = document.querySelectorAll('.tablinks');
const tabsContent = document.querySelectorAll('.tabcontent');

const entries = function*(iterable) {

	let i = 0;

	for (item of iterable) {

		yield [i++, item];

	}

}

const showBlock = index => {

	for (const [blockIndex, block] of entries(tabsContent)) {

		block.style.display = blockIndex === index ? 'block' : 'none';

	}

}

showBlock(0);

for (const [tabIndex, tab] of entries(tabsLink)) {

	tab.addEventListener('click', ev => {

    ev.preventDefault();    

		showBlock(tabIndex);

  });
  
}

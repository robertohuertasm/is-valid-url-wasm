// async function init() {
//   const mod = await import('url-checker');
//   const result = mod.isUrl('http://terra.es');
//   console.log('The string is a url: ', result);
// }

// init();

const mod = import('url-checker');
mod.then(({ isUrl }) => {
  const input = document.querySelector('#text')! as HTMLInputElement;
  const button = document.querySelector('#button')! as HTMLButtonElement;
  const result = document.querySelector('#result')!;

  button.addEventListener('click', () => {
    const url = input.value;
    result.innerHTML = `The string <b>${url}</b> is ${
      isUrl(url) ? '' : 'not '
    }a valid url.`;
  });
});

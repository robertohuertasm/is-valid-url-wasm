async function init() {
  const { isUrl } = await import('url-checker');

  const input = document.querySelector('#text')! as HTMLInputElement;
  const button = document.querySelector('#button')! as HTMLButtonElement;
  const result = document.querySelector('#result')!;

  button.addEventListener('click', () => {
    const url = input.value;
    result.innerHTML = `The string <b>${url}</b> is ${
      isUrl(url) ? '' : 'not '
    }a valid url.`;
  });
}

init();

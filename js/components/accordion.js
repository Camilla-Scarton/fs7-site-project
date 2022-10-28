const $accordion = document.getElementsByClassName('accordion-trigger');

Array.from($accordion).forEach($el => {
  $el.addEventListener("click", (e) => {
    e.preventDefault()

    const id = e.target.dataset.target;
    const $target = document.getElementById(id);
    const $p = $target.querySelector('p');

    if ($target.classList.contains('active')) {
      $target.classList.remove('active');
      return;
    }

    Array.from(document.getElementsByClassName('accordion-box')).forEach(_el => _el.classList.remove('active'));
    $target.style.height = `${$p.height}px`;
    console.dir($p)
    $target.classList.add('active');
  });
});

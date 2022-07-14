function scrollToTarget(idTarget) {
    const target = document.getElementById(idTarget);
    if(!target) return
    window.scrollTo({
        top: target.offsetTop-150,
        left: target.offsetLeft,
        behavior: 'smooth'
      });
}
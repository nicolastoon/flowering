export function hover(headerType: string) {
    const head = document.getElementById(
      `${headerType}-link-head`
    ) as HTMLElement;
    const tail = document.getElementById(
      `${headerType}-link-tail`
    ) as HTMLElement;
    head.style.transform = "translateY(-100%)";
    tail.style.transform = "translateY(-100%)";
  }

  export function unhover(headerType: string) {
    const head = document.getElementById(
      `${headerType}-link-head`
    ) as HTMLElement;
    const tail = document.getElementById(
      `${headerType}-link-tail`
    ) as HTMLElement;
    head.style.transform = "translateY(0%)";
    tail.style.transform = "translateY(0%)";
  }

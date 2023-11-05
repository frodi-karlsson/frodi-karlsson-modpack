async function waitForElementToDisplay(selector, time) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(selector) != null) {
      resolve(true);
    }
    setTimeout(() => {
      resolve(waitForElementToDisplay(selector, time));
    }, time);
  });
}

const collapseSvg = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 10.9394L16.9697 5.96961L18.0304 7.03027L13.0606 12L18.0303 16.9697L16.9697 18.0304L12 13.0607L7.03045 18.0302L5.96979 16.9696L10.9393 12L5.96973 7.03042L7.03039 5.96976L12 10.9394Z"></path> </g></svg>`;
const showSvg = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20 20V4H4V20H20ZM18.5 18.5H16V5.5H18.5V18.5ZM14.5 5.5V18.5H5.5V5.5H14.5Z"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4434 12.0041L7.96967 9.53033L9.03033 8.46967L12.5647 12.0041L9.03098 15.5378L7.97032 14.4771L10.4434 12.0041Z"></path> </g></svg>`;

function buildExpander(navHeight, navWidth) {
  const expanding = document.createElement("div");
  expanding.id = "expanding";
  expanding.style.height = navHeight;
  expanding.style.width = navWidth;
  expanding.style.position = "relative";
  return expanding;
}

function buildMinimizeArrow(navWidth) {
  const minimizeArrow = document.createElement("div");
  minimizeArrow.style.width = navWidth;
  minimizeArrow.style.display = "flex";
  minimizeArrow.style.position = "absolute";
  minimizeArrow.style.top = "-5px";
  minimizeArrow.style.right = "-5px";
  minimizeArrow.style.zIndex = "4";
  minimizeArrow.style.justifyContent = "flex-start";
  minimizeArrow.style.margin = "2px 2px 2px 2px";
  minimizeArrow.style.cursor = "pointer";
  return minimizeArrow;
}

function buildMinimizeIcon() {
  const minimizeIcon = document.createElement("span");
  minimizeIcon.style.width = "25px";
  minimizeIcon.style.height = "25px";
  minimizeIcon.innerHTML = collapseSvg;
  minimizeIcon.style.color = "var(--text-normal)";
  minimizeIcon.style.fill = "var(--text-normal)";
  return minimizeIcon;
}

function makeMinimized(expanding, collapsedParent, nav, minimizeIcon) {
  expanding.style.top = "0px";
  expanding.style.right = "0px";
  collapsedParent.appendChild(expanding);
  expanding.style.width = "20px";
  nav.style.visibility = "hidden";
  expanding.style.position = "absolute";
  minimizeIcon.innerHTML = showSvg;
}

function makeMaximized(expanding, navParent, nav, minimizeIcon, navWidth) {
  navParent.prepend(expanding);
  expanding.style.width = navWidth;
  expanding.style.position = "relative";
  nav.style.visibility = "visible";
  minimizeIcon.innerHTML = collapseSvg;
}

async function run() {
  console.log("Minimizeable DMs loaded");
  await waitForElementToDisplay("div[class^='sidebar_']", 1000);
  await waitForElementToDisplay("nav[aria-label^='Servers sidebar']", 1000);

  const nav = document.querySelector("div[class^='sidebar_'");
  const navHeight = nav.style.height;
  const navWidth = nav.style.width;
  const expanding = buildExpander(navHeight, navWidth);
  const collapsedParent = document.querySelector(
    "nav[aria-label^='Servers sidebar']"
  );
  const navParent = nav.parentNode;
  expanding.appendChild(nav);
  navParent.prepend(expanding);
  const minimizeArrow = buildMinimizeArrow(navWidth);
  nav.style.height = "100%";
  expanding.insertBefore(minimizeArrow, nav);
  const minimizeIcon = buildMinimizeIcon();
  minimizeArrow.appendChild(minimizeIcon);
  let isMinimized = false;
  minimizeArrow.addEventListener("click", () => {
    if (!isMinimized) {
      makeMinimized(expanding, collapsedParent, nav, minimizeIcon);
      isMinimized = true;
    } else {
      makeMaximized(expanding, navParent, nav, minimizeIcon, navWidth);
      isMinimized = false;
    }
  });
}
run();

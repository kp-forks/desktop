/**
 * notion-enhancer
 * (c) 2022 dragonwocky <thedragonring.bod@gmail.com> (https://dragonwocky.me/)
 * (https://notion-enhancer.github.io/) under the MIT license
 */

import "../vendor/twind.min.js";
import { html, render } from "../vendor/htm+preact.min.js";

export default async () => {
  const append = (component, target) => {
    if (typeof target === "string") target = document.querySelector(target);
    const fragment = new DocumentFragment();
    render(component, fragment);
    target.append(fragment);
  };

  const notionSidebar = `.notion-sidebar-container  .notion-sidebar > :nth-child(3) > div > :nth-child(2)`,
    openMenu = html`<div
      role="button"
      tabindex="0"
      onClick=${() => {}}
      style="display: flex; font-size: 14px; min-height: 27px; padding: 2px 16px; margin: 1px 0;"
    >
      <div
        style="width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; margin-right: 8px;"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 128 128"
        >
          <path
            fill="currentColor"
            d="M18.286 29.312 8 20.17v65.429c.016 10.46 2.877 15.473 10.286 23.714l10.285 11.429v-71.43c.053-8.735-2.403-13.068-10.285-20Z"
          />
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="9.143"
            d="m120 24.74-10.286-9.142c-7.633-6.781-12.444-9.03-22.515-8.531M120 24.74v9.143m0-9.143-9.143.457M28.571 120.74l-10.285-11.429C10.876 101.071 8.016 96.058 8 85.598V20.17m20.571 100.57v-9.143m0 9.143 9.143-.457M8 20.169c0-2.903.885-5.26 2.506-6.915 1.568-1.602 3.826-2.544 6.637-2.684M8 20.17l10.286 9.142c7.882 6.932 10.338 11.265 10.285 20v62.286M17.143 10.57l10.286 9.142C35.696 27.09 40.67 28.716 50 28.241l60.857-3.043M17.143 10.569l70-3.5m0 0 .056-.002m-.056.002.056-.002M120 33.884v73.143c0 5.714-3.429 9.314-9.143 9.6l-73.143 3.657M120 33.884c0-5.715-3.429-8.972-9.143-8.686m-82.286 86.4c0 5.714 3.429 8.971 9.143 8.686"
          />
          <path
            fill="currentColor"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="1.714"
            d="M51.724 76.166a.857.857 0 1 0 .17 1.706c8.249-.825 14.057.84 17.808 4.397 3.76 3.565 5.631 9.197 5.631 16.693a.857.857 0 1 0 1.715 0c0-7.481 1.869-13.543 5.694-17.932 3.82-4.384 9.688-7.212 17.915-8.034a.857.857 0 0 0-.171-1.706c-8.24.824-14.047-.84-17.801-4.398-3.763-3.565-5.637-9.197-5.637-16.692a.857.857 0 1 0-1.715 0c0 7.482-1.865 13.543-5.687 17.932-3.818 4.383-9.686 7.21-17.922 8.034Z"
          />
          <path
            fill="currentColor"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="1.143"
            d="M45.657 56.214a.571.571 0 1 0 .114 1.138c3.681-.369 6.232.378 7.867 1.928 1.64 1.556 2.476 4.031 2.476 7.377a.571.571 0 0 0 1.143 0c0-3.337.834-6.016 2.517-7.947 1.68-1.928 4.271-3.186 7.94-3.553a.571.571 0 1 0-.114-1.137c-3.677.368-6.228-.379-7.864-1.929-1.642-1.556-2.479-4.03-2.479-7.377a.571.571 0 1 0-1.143 0c0 3.337-.831 6.016-2.514 7.948-1.678 1.927-4.27 3.185-7.943 3.552Z"
          />
          <path
            fill="currentColor"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width=".571"
            d="M88.543 62.897a.286.286 0 0 0 .057.568c1.23-.123 2.064.129 2.59.628.53.503.81 1.311.81 2.43a.286.286 0 1 0 .571 0c0-1.114.279-1.997.83-2.63.549-.63 1.402-1.048 2.627-1.17a.286.286 0 0 0-.056-.57c-1.23.124-2.063-.128-2.59-.627-.53-.503-.81-1.311-.81-2.43a.286.286 0 1 0-.572 0c0 1.114-.278 1.997-.828 2.63-.55.63-1.402 1.048-2.629 1.17ZM82.257 90.84a.286.286 0 0 0 .057.568c1.035-.103 1.724.109 2.158.52.436.413.67 1.084.67 2.024a.286.286 0 0 0 .572 0c0-.936.234-1.671.691-2.196.456-.523 1.166-.874 2.195-.976a.286.286 0 0 0-.057-.569c-1.033.103-1.723-.109-2.157-.52-.436-.413-.672-1.084-.672-2.024a.286.286 0 1 0-.571 0c0 .936-.233 1.672-.69 2.196-.456.523-1.166.874-2.196.977Z"
          />
          <path
            fill="currentColor"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width=".286"
            d="M60.557 86.039a.143.143 0 0 0 .029.284c.763-.076 1.286.079 1.62.396.335.317.508.825.508 1.52a.143.143 0 0 0 .286 0c0-.692.173-1.244.518-1.641.345-.396.879-.656 1.64-.732a.143.143 0 0 0-.03-.284c-.761.076-1.285-.08-1.619-.396-.335-.318-.509-.826-.509-1.52a.143.143 0 1 0-.286 0c0 .692-.172 1.244-.517 1.64-.345.397-.879.657-1.64.733Z"
          />
        </svg>
      </div>
      <div>notion-enhancer</div>
    </div>`;
  append(openMenu, notionSidebar);

  // html` <div
  //   class="notion-focusable"
  //   role="button"
  //   tabindex="0"
  //   style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; border-radius: 3px; margin-left: 4px; margin-right: 4px; width: calc(100% - 8px);"
  // >
  //   <div
  //     style="display: flex; align-items: center; width: 100%; font-size: 14px; min-height: 27px; padding: 2px 10px; margin-top: 1px; margin-bottom: 1px;"
  //   >
  //     <div
  //       style="flex-shrink: 0; flex-grow: 0; border-radius: 3px; color: rgba(255, 255, 255, 0.443); width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; margin-right: 8px;"
  //     >
  //       <svg
  //         viewBox="0 0 14 14"
  //         class="sidebarSettings"
  //         style="width: 14px; height: 100%; display: block; fill: rgba(255, 255, 255, 0.443); flex-shrink: 0; backface-visibility: hidden;"
  //       >
  //         <path
  //           d="M14,7.77 L14,6.17 L12.06,5.53 L11.61,4.44 L12.49,2.6 L11.36,1.47 L9.55,2.38 L8.46,1.93 L7.77,0.01 L6.17,0.01 L5.54,1.95 L4.43,2.4 L2.59,1.52 L1.46,2.65 L2.37,4.46 L1.92,5.55 L0,6.23 L0,7.82 L1.94,8.46 L2.39,9.55 L1.51,11.39 L2.64,12.52 L4.45,11.61 L5.54,12.06 L6.23,13.98 L7.82,13.98 L8.45,12.04 L9.56,11.59 L11.4,12.47 L12.53,11.34 L11.61,9.53 L12.08,8.44 L14,7.75 L14,7.77 Z M7,10 C5.34,10 4,8.66 4,7 C4,5.34 5.34,4 7,4 C8.66,4 10,5.34 10,7 C10,8.66 8.66,10 7,10 Z"
  //         ></path>
  //       </svg>
  //     </div>
  //     <div
  //       style="flex: 1 1 auto; white-space: nowrap; min-width: 0px; overflow: hidden; text-overflow: ellipsis;"
  //     >
  //       <div>Settings &amp; members</div>
  //     </div>
  //   </div>
  // </div>`;
  // console.log(lucide);

  // const $sidebarLink = html`<div
  //   class="enhancer--sidebarMenuLink"
  //   role="button"
  //   tabindex="0"
  // >
  //   <div>
  //     <div><div>notion-enhancer</div></div>
  //   </div>
  // </div>`;
  //   <div>${await fs.getText("media/colour.svg")}</div>
  // $sidebarLink.addEventListener("click", env.focusMenu);
};

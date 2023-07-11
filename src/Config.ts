export const Config = {
  platforms: {
    web: {
      name: "Web",
      iconClass: "globe",
    },
    desktop: {
      name: "Desktop",
      iconClass: "desktop-computer",
    },
    cli: {
      name: "CLI",
      iconClass: "terminal",
    },
    flutter: {
      name: "Flutter",
      iconClass: "flutter",
    },
    apple: {
      name: "Apple",
      iconClass: "apple",
    },
    android: {
      name: "Android",
      iconClass: "android",
    },
    other: {
      name: "Other",
      iconClass: "cube",
    },
  },
  services: {
    databases: {
      name: "Databases",
      image: "/images/services-db.png",
      icon: `<svg width="16" height="16" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.59961 14.3999V17.9999C3.59961 19.9881 7.36042 21.5999 11.9996 21.5999C16.6388 21.5999 20.3996 19.9881 20.3996 17.9999V14.3999C20.3996 16.3881 16.6388 17.9999 11.9996 17.9999C7.36042 17.9999 3.59961 16.3881 3.59961 14.3999Z" fill="currentColor"></path>
        <path d="M3.59961 8.3999V11.9999C3.59961 13.9881 7.36042 15.5999 11.9996 15.5999C16.6388 15.5999 20.3996 13.9881 20.3996 11.9999V8.3999C20.3996 10.3881 16.6388 11.9999 11.9996 11.9999C7.36042 11.9999 3.59961 10.3881 3.59961 8.3999Z" fill="currentColor"></path>
        <path d="M20.3996 5.9999C20.3996 7.98813 16.6388 9.5999 11.9996 9.5999C7.36042 9.5999 3.59961 7.98813 3.59961 5.9999C3.59961 4.01168 7.36042 2.3999 11.9996 2.3999C16.6388 2.3999 20.3996 4.01168 20.3996 5.9999Z" fill="currentColor"></path>
        </svg>`,
    },
    authentication: {
      name: "Authentication",
      image: "/images/services-auth.png",
      icon: `    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.6002 7.19998C15.6002 9.1882 13.9884 10.8 12.0002 10.8C10.012 10.8 8.4002 9.1882 8.4002 7.19998C8.4002 5.21175 10.012 3.59998 12.0002 3.59998C13.9884 3.59998 15.6002 5.21175 15.6002 7.19998Z"
        fill="currentColor"
      />
      <path
        d="M21.6002 9.59998C21.6002 10.9255 20.5257 12 19.2002 12C17.8747 12 16.8002 10.9255 16.8002 9.59998C16.8002 8.27449 17.8747 7.19998 19.2002 7.19998C20.5257 7.19998 21.6002 8.27449 21.6002 9.59998Z"
        fill="currentColor"
      />
      <path
        d="M16.8002 18C16.8002 15.349 14.6512 13.2 12.0002 13.2C9.34923 13.2 7.20019 15.349 7.20019 18V21.6H16.8002V18Z"
        fill="currentColor"
      />
      <path
        d="M7.20019 9.59998C7.20019 10.9255 6.12568 12 4.8002 12C3.47471 12 2.4002 10.9255 2.4002 9.59998C2.4002 8.27449 3.47471 7.19998 4.8002 7.19998C6.12568 7.19998 7.20019 8.27449 7.20019 9.59998Z"
        fill="currentColor"
      />
      <path
        d="M19.2002 21.6V18C19.2002 16.735 18.874 15.5462 18.3011 14.5132C18.5885 14.4393 18.8897 14.4 19.2002 14.4C21.1884 14.4 22.8002 16.0118 22.8002 18V21.6H19.2002Z"
        fill="currentColor"
      />
      <path
        d="M5.69931 14.5132C5.12641 15.5462 4.8002 16.735 4.8002 18V21.6H1.2002V18C1.2002 16.0118 2.81197 14.4 4.8002 14.4C5.11065 14.4 5.41192 14.4393 5.69931 14.5132Z"
        fill="currentColor"
      />
    </svg>`,
    },
    storage: {
      name: "Storage",
      image: "/images/services-storage.png",
      icon: `    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.80039 3.59998C3.47491 3.59998 2.40039 4.67449 2.40039 5.99998C2.40039 7.32546 3.47491 8.39998 4.80039 8.39998H19.2004C20.5259 8.39998 21.6004 7.32546 21.6004 5.99998C21.6004 4.67449 20.5259 3.59998 19.2004 3.59998H4.80039Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.60039 9.59998H20.4004V18C20.4004 19.3255 19.3259 20.4 18.0004 20.4H6.00039C4.67491 20.4 3.60039 19.3255 3.60039 18V9.59998ZM9.60039 13.2C9.60039 12.5372 10.1376 12 10.8004 12H13.2004C13.8631 12 14.4004 12.5372 14.4004 13.2C14.4004 13.8627 13.8631 14.4 13.2004 14.4H10.8004C10.1376 14.4 9.60039 13.8627 9.60039 13.2Z"
        fill="currentColor"
      />
    </svg>`,
    },
    functions: {
      name: "Functions",
      image: "/images/services-functions.png",
      icon: ` <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.5604 1.25555C14.0599 1.41302 14.3996 1.87627 14.3996 2.40004V8.40004L19.1996 8.40004C19.6471 8.40004 20.0574 8.64899 20.264 9.04587C20.4706 9.44274 20.4393 9.92163 20.1827 10.2882L11.7827 22.2882C11.4823 22.7173 10.9384 22.902 10.4388 22.7445C9.93931 22.5871 9.59961 22.1238 9.59961 21.6L9.59961 15.6H4.79961C4.35216 15.6 3.94188 15.3511 3.73524 14.9542C3.5286 14.5573 3.55994 14.0784 3.81653 13.7119L12.2165 1.71188C12.5169 1.2828 13.0608 1.09809 13.5604 1.25555Z"
        fill="currentColor"
      />
    </svg>`,
    },
    realtime: {
      name: "Realtime",
      image: "/images/services-realtime.png",
      icon: `  <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0004 21.6C17.3023 21.6 21.6004 17.302 21.6004 12C21.6004 6.69809 17.3023 2.40002 12.0004 2.40002C6.69846 2.40002 2.40039 6.69809 2.40039 12C2.40039 17.302 6.69846 21.6 12.0004 21.6ZM13 7.20007C13 6.64779 12.5523 6.20007 12 6.20007C11.4477 6.20007 11 6.64779 11 7.20007V12.0001C11 12.2653 11.1054 12.5196 11.2929 12.7072L14.687 16.1013C15.0775 16.4918 15.7107 16.4918 16.1012 16.1013C16.4917 15.7108 16.4917 15.0776 16.1012 14.6871L13 11.5859V7.20007Z"
        fill="currentColor"
      />
    </svg>`,
    },
  },
  frameworks: {
    "next-js": {
      name: "Next.js",
      icon: `<svg width="16" height="16" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Next.js</title><path fill="currentColor" d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"/></svg>`,
    },
    "svelte-kit": {
      name: "Svelte Kit",
      icon: `<svg width="16" height="16" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Svelte</title><path fill="currentColor" d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295 6.753 6.753 0 0 0 .666 4.336 6.43 6.43 0 0 0-.96 2.396 6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295 6.756 6.756 0 0 0-.665-4.336 6.429 6.429 0 0 0 .958-2.396 6.831 6.831 0 0 0-1.167-5.168Z"/></svg>`,
    },
    nuxt: {
      name: "Nuxt",
      icon: `<svg width="16" height="16" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Nuxt.js</title><path fill="currentColor" d="M13.4642 19.8295h8.9218c.2834 0 .5618-.0723.8072-.2098a1.5899 1.5899 0 0 0 .5908-.5732 1.5293 1.5293 0 0 0 .216-.783 1.529 1.529 0 0 0-.2167-.7828L17.7916 7.4142a1.5904 1.5904 0 0 0-.5907-.573 1.6524 1.6524 0 0 0-.807-.2099c-.2833 0-.5616.0724-.807.2098a1.5904 1.5904 0 0 0-.5907.5731L13.4642 9.99l-2.9954-5.0366a1.5913 1.5913 0 0 0-.591-.573 1.6533 1.6533 0 0 0-.8071-.2098c-.2834 0-.5617.0723-.8072.2097a1.5913 1.5913 0 0 0-.591.573L.2168 17.4808A1.5292 1.5292 0 0 0 0 18.2635c-.0001.2749.0744.545.216.783a1.59 1.59 0 0 0 .5908.5732c.2454.1375.5238.2098.8072.2098h5.6003c2.219 0 3.8554-.9454 4.9813-2.7899l2.7337-4.5922L16.3935 9.99l4.3944 7.382h-5.8586ZM7.123 17.3694l-3.9083-.0009 5.8586-9.8421 2.9232 4.921-1.9572 3.2892c-.7478 1.1967-1.5972 1.6328-2.9163 1.6328z"/></svg>`,
    },
    remix: {
      name: "Remix",
      icon: `<svg width="16" height="16" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Remix</title><path fill="currentColor" d="M21.511 18.508c.216 2.773.216 4.073.216 5.492H15.31c0-.309.006-.592.011-.878.018-.892.036-1.821-.109-3.698-.19-2.747-1.374-3.358-3.55-3.358H1.574v-5h10.396c2.748 0 4.122-.835 4.122-3.049 0-1.946-1.374-3.125-4.122-3.125H1.573V0h11.541c6.221 0 9.313 2.938 9.313 7.632 0 3.511-2.176 5.8-5.114 6.182 2.48.497 3.93 1.909 4.198 4.694ZM1.573 24v-3.727h6.784c1.133 0 1.379.84 1.379 1.342V24Z"/></svg>`,
    },

    react: {
      name: "React",
      icon: `<svg width="16" height="16" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React</title><path fill="currentColor" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>`,
    },

    svelte: {
      name: "Svelte",
      icon: `<svg width="16" height="16" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Svelte</title><path fill="currentColor" d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295 6.753 6.753 0 0 0 .666 4.336 6.43 6.43 0 0 0-.96 2.396 6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295 6.756 6.756 0 0 0-.665-4.336 6.429 6.429 0 0 0 .958-2.396 6.831 6.831 0 0 0-1.167-5.168Z"/></svg>`,
    },

    vue: {
      name: "Vue",
      icon: `<svg width="16" height="16" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vue.js</title><path fill="currentColor" d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/></svg>`,
    },

    qwik: {
      name: "Qwik",
      icon: `<svg width="16" height="16" viewBox="0 0 500 506" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M250 449.707L431.102 505.511L343.037 423.652L129.174 224.859L179.178 174.86L156.157 16.117L8.34822 193.702C-2.78296 212.982 -2.78273 236.736 8.34883 256.016L102.191 418.551C113.323 437.831 133.894 449.707 156.156 449.707L250 449.707Z" fill="currentColor"/>
      <path d="M343.843 0L156.157 1.74069e-05C133.894 1.94717e-05 113.323 11.8771 102.192 31.1573L8.34822 193.702L156.157 16.117L370.826 224.859L330.828 264.86L343.037 423.652L431.102 505.511C436.18 507.075 440.635 501.755 438.204 497.031L397.809 418.551L491.651 256.016C502.783 236.736 502.783 212.982 491.652 193.702L397.808 31.1572C386.677 11.8771 366.106 -2.06475e-06 343.843 0Z" fill="currentColor"/>
      </svg>
      `,
    },

    solid: {
      name: "Solid",
      icon: `<svg width="16" height="16" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Solid</title><path fill="currentColor" d="M11.558.788A9.082 9.082 0 0 0 9.776.99l-.453.15c-.906.303-1.656.755-2.1 1.348l-.301.452-2.035 3.528c.426-.387.974-.698 1.643-.894h.001l.613-.154h.001a8.82 8.82 0 0 1 1.777-.206c2.916-.053 6.033 1.148 8.423 2.36 2.317 1.175 3.888 2.32 3.987 2.39L24 5.518c-.082-.06-1.66-1.21-3.991-2.386-2.393-1.206-5.521-2.396-8.45-2.343zM8.924 5.366a8.634 8.634 0 0 0-1.745.203l-.606.151c-1.278.376-2.095 1.16-2.43 2.108-.334.948-.188 2.065.487 3.116.33.43.747.813 1.216 1.147L12.328 10h.001a6.943 6.943 0 0 1 6.013 1.013l2.844-.963c-.17-.124-1.663-1.2-3.91-2.34-2.379-1.206-5.479-2.396-8.352-2.344zm5.435 4.497a6.791 6.791 0 0 0-1.984.283L2.94 13.189 0 18.334l9.276-2.992a6.945 6.945 0 0 1 7.408 2.314v.001c.695.903.89 1.906.66 2.808l2.572-4.63c.595-1.041.45-2.225-.302-3.429a6.792 6.792 0 0 0-5.255-2.543zm-3.031 5.341a6.787 6.787 0 0 0-2.006.283L.008 18.492c.175.131 2.02 1.498 4.687 2.768 2.797 1.332 6.37 2.467 9.468 1.712l.454-.152h.002c1.278-.376 2.134-1.162 2.487-2.09.353-.93.207-2.004-.541-2.978a6.791 6.791 0 0 0-5.237-2.548z"/></svg>`,
    },
    angular: {
      name: "Angular",
      icon: `<svg width="16" height="16" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Angular</title><path fill="currentColor" d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.242L23.32 3.984 11.999.001zm7.064 18.31h-2.638l-1.422-3.503H8.996l-1.422 3.504h-2.64L12 2.65z"/></svg>`,
    },

    astro: {
      name: "Astro",
      icon: `<svg width="16" height="16" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Astro</title><path fill="currentColor" d="M16.074 16.86c-.72.616-2.157 1.035-3.812 1.035-2.032 0-3.735-.632-4.187-1.483-.161.488-.198 1.046-.198 1.402 0 0-.106 1.75 1.111 2.968 0-.632.513-1.145 1.145-1.145 1.083 0 1.082.945 1.081 1.712v.069c0 1.164.711 2.161 1.723 2.582a2.347 2.347 0 0 1-.236-1.029c0-1.11.652-1.523 1.41-2.003.602-.383 1.272-.807 1.733-1.66a3.129 3.129 0 0 0 .378-1.494 3.14 3.14 0 0 0-.148-.954zM15.551.6c.196.244.296.572.496 1.229l4.368 14.347a18.18 18.18 0 0 0-5.222-1.768L12.35 4.8a.37.37 0 0 0-.71.002l-2.81 9.603a18.175 18.175 0 0 0-5.245 1.771L7.974 1.827c.2-.656.3-.984.497-1.227a1.613 1.613 0 0 1 .654-.484C9.415 0 9.757 0 10.443 0h3.135c.686 0 1.03 0 1.32.117A1.614 1.614 0 0 1 15.55.6z"/></svg>`,
    },

    preact: {
      name: "Preact",
      icon: `<svg width="16" height="16" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Preact</title><path fill="currentColor" d="M 12,10.406 A 1.594,1.594 0 0 0 10.406,12 1.594,1.594 0 0 0 12,13.594 1.594,1.594 0 0 0 13.594,12 1.594,1.594 0 0 0 12,10.406 Z m 5.499,-4.33 a 2.998,2.998 0 0 1 0.643,0.054 1.668,1.668 0 0 1 0.48,0.172 1.085,1.085 0 0 1 0.29,0.235 1.032,1.032 0 0 1 0.185,0.315 1.454,1.454 0 0 1 0.084,0.452 c 0.007,0.195 -0.015,0.398 -0.058,0.603 -0.054,0.261 -0.14,0.521 -0.244,0.778 -0.137,0.334 -0.304,0.66 -0.49,0.978 -0.245,0.417 -0.52,0.818 -0.817,1.207 -0.145,0.191 -0.3,0.376 -0.455,0.561 -0.22,-0.238 -0.443,-0.472 -0.673,-0.7 a 23.61,23.61 0 0 0 -2.05,-1.797 l -0.23,0.296 0.23,-0.296 -0.018,-0.014 -0.461,0.592 0.018,0.014 a 22.864,22.864 0 0 1 1.984,1.74 c 0.241,0.237 0.475,0.48 0.703,0.73 -0.099,0.108 -0.194,0.22 -0.296,0.326 -0.099,0.104 -0.2,0.207 -0.301,0.308 l 0.53,0.53 c 0.106,-0.105 0.21,-0.212 0.313,-0.32 0.085,-0.088 0.164,-0.182 0.248,-0.272 0.065,0.078 0.135,0.152 0.198,0.231 a 13.317,13.317 0 0 1 0.909,1.262 c 0.211,0.336 0.404,0.681 0.564,1.036 a 5.23,5.23 0 0 1 0.293,0.806 3.019,3.019 0 0 1 0.102,0.637 c 0.008,0.178 -0.007,0.351 -0.05,0.508 -0.034,0.123 -0.087,0.239 -0.157,0.338 h -10e-4 c -0.068,0.098 -0.157,0.186 -0.26,0.256 -0.121,0.083 -0.264,0.146 -0.418,0.191 -0.188,0.054 -0.39,0.081 -0.6,0.09 -0.266,0.01 -0.538,-0.01 -0.814,-0.05 -0.357,-0.051 -0.713,-0.134 -1.067,-0.238 -0.464,-0.137 -0.92,-0.307 -1.369,-0.5 h -0.001 c -0.584,-0.253 -1.153,-0.543 -1.71,-0.86 L 12.708,16.26 c 0.578,-0.377 1.144,-0.77 1.686,-1.194 l -0.21,-0.27 0.211,0.27 0.018,-0.015 -0.463,-0.59 -0.017,0.014 c -0.695,0.542 -1.418,1.047 -2.168,1.505 A 18.53,18.53 0 0 1 9.938,16.963 C 9.465,17.182 8.984,17.378 8.494,17.539 A 8.68,8.68 0 0 1 7.352,17.835 C 7.066,17.887 6.781,17.921 6.499,17.925 6.277,17.928 6.061,17.912 5.856,17.87 5.681,17.834 5.518,17.778 5.376,17.698 5.265,17.635 5.166,17.556 5.086,17.464 5.007,17.373 4.944,17.265 4.901,17.149 4.85,17.012 4.823,16.857 4.817,16.696 a 2.54,2.54 0 0 1 0.058,-0.603 c 0.055,-0.261 0.14,-0.52 0.245,-0.777 a 7.704,7.704 0 0 1 0.49,-0.978 12.09,12.09 0 0 1 1.271,-1.767 c 0.232,0.251 0.469,0.497 0.712,0.737 a 23.645,23.645 0 0 0 2.02,1.765 l 0.461,-0.591 A 22.9,22.9 0 0 1 8.119,12.773 C 7.865,12.523 7.618,12.267 7.378,12.004 7.477,11.896 7.573,11.785 7.673,11.679 7.776,11.572 7.879,11.466 7.983,11.362 l -0.53,-0.53 C 7.345,10.94 7.238,11.05 7.132,11.16 7.047,11.249 6.967,11.343 6.884,11.433 6.829,11.367 6.77,11.305 6.715,11.238 6.386,10.832 6.077,10.411 5.799,9.975 5.585,9.637 5.391,9.292 5.228,8.935 5.102,8.66 4.995,8.38 4.92,8.097 4.863,7.882 4.826,7.669 4.818,7.46 A 1.67,1.67 0 0 1 4.868,6.953 C 4.902,6.829 4.955,6.714 5.025,6.614 H 5.026 C 5.094,6.516 5.184,6.428 5.286,6.358 A 1.446,1.446 0 0 1 5.705,6.168 C 5.892,6.113 6.094,6.086 6.304,6.078 a 4.545,4.545 0 0 1 0.814,0.048 7.708,7.708 0 0 1 1.067,0.24 12.092,12.092 0 0 1 1.369,0.5 17.248,17.248 0 0 1 1.736,0.874 24.003,24.003 0 0 0 -1.694,1.202 l 0.462,0.59 c 0.683,-0.534 1.393,-1.031 2.13,-1.484 0.594,-0.363 1.203,-0.697 1.83,-0.99 0.474,-0.222 0.956,-0.42 1.448,-0.583 A 8.816,8.816 0 0 1 16.612,6.172 C 16.91,6.116 17.207,6.08 17.499,6.076 Z m -0.01,-0.75 -0.001,0 C 17.142,5.331 16.804,5.373 16.474,5.434 A 9.546,9.546 0 0 0 15.229,5.763 14.202,14.202 0 0 0 13.7,6.379 C 13.117,6.651 12.554,6.961 12.004,7.289 11.883,7.216 11.761,7.144 11.637,7.074 11.06,6.745 10.466,6.442 9.852,6.177 9.38,5.974 8.897,5.792 8.397,5.646 8.017,5.534 7.625,5.442 7.225,5.384 6.916,5.34 6.599,5.316 6.275,5.329 6.021,5.339 5.759,5.372 5.499,5.446 5.281,5.51 5.063,5.602 4.863,5.74 A 1.774,1.774 0 0 0 4.146,6.754 C 4.078,7.001 4.059,7.251 4.069,7.491 a 3.728,3.728 0 0 0 0.127,0.798 6.016,6.016 0 0 0 0.351,0.959 9.548,9.548 0 0 0 0.62,1.128 14.203,14.203 0 0 0 0.967,1.335 c 0.08,0.098 0.166,0.19 0.248,0.286 C 6.193,12.219 6.007,12.443 5.83,12.676 5.519,13.084 5.226,13.51 4.963,13.958 A 8.44,8.44 0 0 0 4.425,15.033 5.28,5.28 0 0 0 4.142,15.941 C 4.089,16.19 4.059,16.453 4.069,16.723 a 2.182,2.182 0 0 0 0.13,0.688 v 10e-4 a 1.775,1.775 0 0 0 0.81,0.94 2.403,2.403 0 0 0 0.697,0.253 3.699,3.699 0 0 0 0.805,0.07 5.97,5.97 0 0 0 0.977,-0.102 l 10e-4,-0.001 a 9.412,9.412 0 0 0 1.24,-0.32 c 0.523,-0.173 1.031,-0.38 1.526,-0.61 0.599,-0.278 1.178,-0.593 1.742,-0.93 0.121,0.072 0.243,0.144 0.366,0.214 a 17.99,17.99 0 0 0 1.785,0.898 12.832,12.832 0 0 0 1.455,0.53 c 0.38,0.112 0.772,0.204 1.172,0.262 a 5.284,5.284 0 0 0 0.95,0.056 c 0.254,-0.01 0.516,-0.044 0.776,-0.118 0.218,-0.063 0.436,-0.156 0.636,-0.294 a 1.775,1.775 0 0 0 0.717,-1.014 c 0.068,-0.248 0.087,-0.497 0.077,-0.736 -0.011,-0.277 -0.06,-0.544 -0.127,-0.799 -0.085,-0.322 -0.202,-0.629 -0.335,-0.923 -0.178,-0.393 -0.387,-0.767 -0.612,-1.127 -0.294,-0.466 -0.618,-0.908 -0.959,-1.333 -0.09,-0.111 -0.188,-0.216 -0.28,-0.324 0.189,-0.222 0.374,-0.447 0.552,-0.679 0.311,-0.409 0.604,-0.835 0.867,-1.283 A 8.441,8.441 0 0 0 19.575,8.967 5.277,5.277 0 0 0 19.858,8.06 C 19.911,7.81 19.941,7.547 19.931,7.277 19.924,7.051 19.886,6.817 19.801,6.589 V 6.588 a 1.775,1.775 0 0 0 -0.81,-0.94 C 18.767,5.522 18.529,5.444 18.294,5.396 A 3.7,3.7 0 0 0 17.489,5.326 Z M 12,0 22.392,6 V 18 L 12,24 1.607,18 V 6 Z"/></svg>`,
    },

    gatsby: {
      name: "Gatsby",
      icon: `<svg width="16" height="16" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gatsby</title><path fill="currentColor" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 2.571c3.171 0 5.915 1.543 7.629 3.858l-1.286 1.115C16.886 5.572 14.571 4.286 12 4.286c-3.343 0-6.171 2.143-7.286 5.143l9.857 9.857c2.486-.857 4.373-3 4.973-5.572h-4.115V12h6c0 4.457-3.172 8.228-7.372 9.17L2.83 9.944C3.772 5.743 7.543 2.57 12 2.57zm-9.429 9.6l9.344 9.258c-2.4-.086-4.801-.943-6.601-2.743-1.8-1.8-2.743-4.201-2.743-6.515z"/></svg>`,
    },
    hugo: {
      name: "Hugo",
      icon: `<svg width="16" height="16" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Hugo</title><path fill="currentColor" d="M11.754 0a3.998 3.998 0 00-2.049.596L3.33 4.532a4.252 4.252 0 00-2.017 3.615v8.03c0 1.473.79 2.838 2.067 3.574l6.486 3.733a3.88 3.88 0 003.835.018l7.043-3.966a3.817 3.817 0 001.943-3.323V7.752a3.57 3.57 0 00-1.774-3.084L13.817.541a3.998 3.998 0 00-2.063-.54zm.022 1.674c.413-.006.828.1 1.2.315l7.095 4.127c.584.34.941.96.94 1.635v8.462c0 .774-.414 1.484-1.089 1.864l-7.042 3.966a2.199 2.199 0 01-2.179-.01l-6.485-3.734a2.447 2.447 0 01-1.228-2.123v-8.03c0-.893.461-1.72 1.221-2.19l6.376-3.935a2.323 2.323 0 011.19-.347zm-4.7 3.844V18.37h2.69v-5.62h4.46v5.62h2.696V5.518h-2.696v4.681h-4.46V5.518Z"/></svg>`,
    },
    refine: {
      name: "Refine",
      icon: `<svg width="16" height="16" role="img" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><title>Refine</title><path fill-rule="evenodd" clip-rule="evenodd" d="M 9.683 4.616 C 9.683 3.695 8.937 2.95 8.016 2.95 C 7.095 2.95 6.35 3.695 6.35 4.616 L 6.35 11.283 C 6.35 12.204 7.095 12.95 8.016 12.95 C 8.937 12.95 9.683 12.204 9.683 11.283 L 9.683 4.616 Z M 8.016 5.887 C 8.717 5.887 9.287 5.317 9.287 4.616 C 9.287 3.915 8.717 3.345 8.016 3.345 C 7.315 3.345 6.747 3.915 6.747 4.616 C 6.747 5.317 7.315 5.887 8.016 5.887 Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M 16 8 C 16 12.418 12.418 16 8 16 C 3.582 16 0 12.418 0 8 C 0 3.582 3.582 0 8 0 C 12.418 0 16 3.582 16 8 Z M 8 2 C 6.619 2 5.5 3.119 5.5 4.5 L 5.5 11.5 C 5.5 12.881 6.619 14 8 14 C 9.381 14 10.5 12.881 10.5 11.5 L 10.5 4.5 C 10.5 3.119 9.381 2 8 2 Z" fill="currentColor"></path></svg>`,
    },
    other: {
      name: "Other",
    },
  },
  uiLibraries: {
    "pink-design": {
      name: "Pink",
      icon: `<svg width="16" height="16" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Appwrite</title><path fill="currentColor" d="M7.834 4C4.094 4.09.584 6.816.06 11.014a7.993 7.994 0 0 0 3.122 7.368c2.757 2.08 6.198 2.047 8.82.538a7.993 7.994 0 1 0-.005-13.834A7.84 7.84 0 0 0 7.831 4zm.122 1.485a6.525 6.526 0 0 1 6.484 5.537c0 .007.002.013.003.02.02.143.037.287.048.433l.006.054c.01.15.016.303.017.456 0 .084-.005.168-.008.252-.002.058-.003.117-.007.175a6.68 6.68 0 0 1-.03.335l-.01.08c-.015.12-.033.24-.055.358l-.01.048c-.022.124-.05.248-.08.37l-.006.025a6.578 6.58 0 0 1-.41 1.15c-.007.016-.017.033-.024.05a6.538 6.54 0 0 1-1.62 2.115l-.054.046c-.08.067-.162.13-.245.194-.055.042-.11.084-.168.125-.04.03-.08.056-.122.084a6.68 6.68 0 0 1-1.123.612 6.517 6.518 0 0 1-6.468-.8C.069 14.184.838 7.96 5.457 6.004a6.512 6.513 0 0 1 2.499-.518zm.61 3.72c-.183 0-.343.013-.352.032-.01.024-.132.504-.264 1.074-.136.57-.353 1.468-.475 2-.235.974-.377 1.613-.377 1.698 0 .023.146.042.325.042h.325l.146-.65.423-1.796c.15-.635.334-1.408.405-1.72.07-.31.14-.591.155-.624.014-.043-.066-.057-.31-.057zm-2.441 1.6-.438.47-.433.47.127.15c.07.086.264.298.428.472l.302.32h.856l-.405-.438c-.221-.235-.405-.46-.405-.49 0-.032.17-.243.377-.47.207-.23.376-.428.376-.45 0-.02-.178-.034-.395-.034zm3.27 0c-.231 0-.415.014-.415.028s.08.103.18.202c.366.367.624.678.61.74-.009.032-.188.253-.405.484l-.39.428h.437l.438-.005.4-.438c.22-.244.4-.46.4-.49 0-.023-.188-.244-.424-.493l-.423-.457z"/></svg>`,
    },
    tailwind: {
      name: "Tailwind",
      icon: `<svg width="16" height="16" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tailwind CSS</title><path fill="currentColor" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>`,
    },
    chakra: {
      name: "Chakra",
      icon: `<svg  width="16" height="16" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Chakra UI</title><path fill="currentColor" d="M12 0C5.352 0 0 5.352 0 12s5.352 12 12 12 12-5.352 12-12S18.648 0 12 0zm2.8 4.333c.13-.004.248.136.171.278l-3.044 5.58a.187.187 0 00.164.276h5.26c.17 0 .252.207.128.323l-9.22 8.605c-.165.154-.41-.063-.278-.246l4.364-6.021a.187.187 0 00-.151-.296H6.627a.187.187 0 01-.131-.32l8.18-8.123a.182.182 0 01.125-.056z"/></svg>`,
    },
    bootstrap: {
      name: "Bootstrap",
      icon: `<svg width="16" height="16" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bootstrap</title><path fill="currentColor" d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"/></svg>`,
    },
    "material-ui": {
      name: "Material UI",
      icon: `<svg width="16" height="16" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Material Design</title><path fill="currentColor" d="M12 0C5.377 0 0 5.377 0 12s5.377 12 12 12 12-5.377 12-12S18.623 0 12 0zm0 .75c2.871 0 5.482 1.082 7.469 2.85H4.53A11.197 11.197 0 0 1 12 .75zm-7.186 3.6h14.372L12 18.723 4.814 4.35zM3.6 4.53V19.47A11.197 11.197 0 0 1 .75 12c0-2.87 1.082-5.481 2.85-7.468zm16.8 0A11.197 11.197 0 0 1 23.25 12c0 2.871-1.082 5.482-2.85 7.469V4.53zM4.35 5.1l7.275 14.55H4.35V5.1zm15.3 0v14.55h-7.275L19.651 5.1zM4.533 20.4H19.469A11.197 11.197 0 0 1 12 23.25a11.197 11.197 0 0 1-7.468-2.85z"/></svg>`,
    },
    css: {
      name: "Vanila CSS",
      icon: `<svg width="16" height="16" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>CSS3</title><path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>`,
    },
    scss: {
      name: "SCSS / SASS",
      icon: `<svg  width="16" height="16" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sass</title><path fill="currentColor" d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z"/></svg>`,
    },
    pinceau: {
      name: "Pinceau",
    },
    "radix-ui": {
      name: "Radix UI",
    },
    other: {
      name: "Other",
    },
  },
  useCases: {
    ai: {
      name: "AI",
    },
    starter: {
      name: "Starter",
    },
    ecommerce: {
      name: "Ecommerce",
    },
    blog: {
      name: "Blog",
    },
    portfolio: {
      name: "Portfolio",
    },
    saas: {
      name: "SaaS",
    },
    documentation: {
      name: "Documentation",
    },
    web3: {
      name: "Web3",
    },
    "demo-app": {
      name: "Demo App",
    },
    plugins: {
      name: "Plugins",
    },
    other: {
      name: "Other",
    },
  },
};

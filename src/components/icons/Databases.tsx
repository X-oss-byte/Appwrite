import { component$ } from "@builder.io/qwik";

export default component$((props: { active: boolean; disabled?: boolean }) => {
  return (
    <svg
      style={
        props.disabled
          ? "color: hsl(var(--color-neutral-200))"
          : props.active
          ? "color: hsl(var(--color-primary-200))"
          : "color: hsl(var(--color-neutral-150))"
      }
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.59961 14.3999V17.9999C3.59961 19.9881 7.36042 21.5999 11.9996 21.5999C16.6388 21.5999 20.3996 19.9881 20.3996 17.9999V14.3999C20.3996 16.3881 16.6388 17.9999 11.9996 17.9999C7.36042 17.9999 3.59961 16.3881 3.59961 14.3999Z"
        fill="currentColor"
      />
      <path
        d="M3.59961 8.3999V11.9999C3.59961 13.9881 7.36042 15.5999 11.9996 15.5999C16.6388 15.5999 20.3996 13.9881 20.3996 11.9999V8.3999C20.3996 10.3881 16.6388 11.9999 11.9996 11.9999C7.36042 11.9999 3.59961 10.3881 3.59961 8.3999Z"
        fill="currentColor"
      />
      <path
        d="M20.3996 5.9999C20.3996 7.98813 16.6388 9.5999 11.9996 9.5999C7.36042 9.5999 3.59961 7.98813 3.59961 5.9999C3.59961 4.01168 7.36042 2.3999 11.9996 2.3999C16.6388 2.3999 20.3996 4.01168 20.3996 5.9999Z"
        fill="currentColor"
      />
    </svg>
  );
});

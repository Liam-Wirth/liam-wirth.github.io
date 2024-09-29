<script>
  export let size = "1em";
  export let color = "currentColor";
  export let pathData = ""; // This will be overridden by specific icons
</script>

<svg
  width={size}
  height={size}
  fill={color}
  xmlns="http://www.w3.org/2000/svg"
  {...$$restProps}
>
  <path d={pathData} />
</svg>

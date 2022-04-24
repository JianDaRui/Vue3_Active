类

```ts
export default defineComponent({
  name: 'ClassDemo',
  props: {
    size: {
      type: string,
      default: ''
	  }
  },
  setup(props, { slots }) { 
    const classes = computed(() => {
      const { size } = props
      return size === 'large' ? 'lg' : 'sm'
    })
    return () => {
      return <div class={classes.value}>添加类</div>;
    };
  },
});
```



事件

```js
export default defineComponent({
  name: 'ClassDemo',
  props: {
    size: {
      type: string,
      default: ''
	  }
  },
  setup(props, { slots }) { 
    const handleClick = () => {
      console.log("click")
    }
    return () => {
      return <button onClick={handleClick}>添加事件</button>;
    };
  },
});
```


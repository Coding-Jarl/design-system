<script lang="ts">
	const type: string = 'text';
	const label: string = 'text';
	const value: string = 'text';
	const placeholder: string = 'lorem ipsum';
</script>

<label class="wrapper"
	>{label}
	<input {type} {value} {placeholder} />
</label>

<!-- <form>
    <Field type="text" label="title" />
    <Field type="textarea" label="desrciption" />
    <Field type="radio" values={[{label:"one", value:"1"}, {label:"two", value:"2"}]} />
</form> -->

<style>
	.wrapper {
	}
	:focus {
		outline: 0;
	}
	label {
		position: relative;
	}
	label:focus-within {
		/* font-weight: bold;
		background-color: color-mix(in srgb, var(--color-accent), transparent); */

		outline: 1px dotted yellowgreen;
		outline-offset: calc(var(--size-base) / 2);
	}
	input {
	}
</style>

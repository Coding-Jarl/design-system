<script lang="ts"></script>

<div class="wrapper">
	<div class="p p-1" />
	<div class="p p-2" />
	<div class="p p-3" />
	<div class="p p-4" />
	<div class="p p-5" />
	<div class="p p-6" />
	<div class="p p-7" />
	<div class="p p-8" />
	<div class="p p-9" />
	<div class="p p-10" />
	<div class="p p-11" />
	<div class="s s-1" />
	<div class="s s-2" />
	<div class="s s-3" />
	<div class="s s-4" />
	<div class="s s-5" />
	<div class="a a-1" />
	<div class="a a-2" />
	<div class="a a-3" />
	<div class="a a-4" />
	<div class="a a-5" />
	<div class="a a-6" />
</div>

<style>
	.wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
		gap: var(--size-base);
		grid-auto-flow: row;
		grid-template-areas:
			'a-1 a-1 a-1 a-2 a-2 s-4 p-8 p-7 p-7 p-7'
			'a-3 p-1 p-1 p-1 p-1 s-4 p-3 p-3 p-3 p-11'
			'a-4 p-1 p-1 p-1 p-1 s-4 p-3 p-3 p-3 p-11'
			'p-4 p-1 p-1 p-1 p-1 s-2 s-2 s-2 p-10 s-3'
			'p-4 p-1 p-1 p-1 p-1 s-2 s-2 s-2 p-10 s-3'
			'p-4 p-1 p-1 p-1 p-1 s-2 s-2 s-2 p-2 p-2'
			's-1 s-1 s-5 s-5 s-5 s-2 s-2 s-2 p-2 p-2'
			's-1 s-1 s-5 s-5 s-5 s-2 s-2 s-2 p-2 p-2'
			'p-9 p-5 p-5 p-5 p-5 p-5 a-6 a-5 p-2 p-2'
			'p-9 p-6 p-6 p-6 p-6 p-6 p-6 a-5 p-2 p-2';
		background-color: var(--color-background);
		height: 100%;
	}

	.wrapper > * {
		border-radius: 1em;
	}

	.p {
		background-color: var(--color-primary);
	}
	.s {
		background-color: var(--color-secondary);
	}
	.a {
		background-color: var(--color-accent);
	}

	.p-1 {
		grid-area: p-1;
	}

	.p-2 {
		grid-area: p-2;
	}

	.p-3 {
		grid-area: p-3;
	}

	.p-4 {
		grid-area: p-4;
	}

	.p-5 {
		grid-area: p-5;
	}

	.p-6 {
		grid-area: p-6;
	}

	.p-7 {
		grid-area: p-7;
	}

	.p-8 {
		grid-area: p-8;
	}

	.p-9 {
		grid-area: p-9;
	}

	.p-10 {
		grid-area: p-10;
	}

	.p-11 {
		grid-area: p-11;
	}

	.s-1 {
		grid-area: s-1;
	}

	.s-2 {
		grid-area: s-2;
	}

	.s-3 {
		grid-area: s-3;
	}

	.s-4 {
		grid-area: s-4;
	}

	.s-5 {
		grid-area: s-5;
	}

	.a-1 {
		grid-area: a-1;
	}

	.a-2 {
		grid-area: a-2;
	}

	.a-3 {
		grid-area: a-3;
	}

	.a-4 {
		grid-area: a-4;
	}

	.a-5 {
		grid-area: a-5;
	}

	.a-6 {
		grid-area: a-6;
	}
</style>

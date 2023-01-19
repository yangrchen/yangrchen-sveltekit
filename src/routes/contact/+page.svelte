<script lang="ts">
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';
	import { onMount } from 'svelte';
	import {PUBLIC_RECAPTCHA_SITE_KEY} from '$env/static/public'
	onMount(() => {
		window.handleCaptchaCallback = handleCaptchaCallback;
		window.handleCaptchaError = handleCaptchaError;
		window.resetCaptcha = resetCaptcha;
	});
	let name: string;
	let email: string;
	let message: string;
	let res: CustomResponse = {};
	const handleCaptchaCallback = async (token: string) => {
		let submit = await fetch('/contact', {
			method: 'POST',
			body: JSON.stringify({ name, email, message, token: token }),
			headers: {
				accept: 'application/json'
			}
		});
		resetCaptcha();
		res = await submit.json();
	};
	const handleCaptchaError = () => {
		console.log('Captcha error');
	};
	const resetCaptcha = () => {
		window.grecaptcha.reset();
	};
	const handleSubmit = async () => {
		window.grecaptcha.execute();
	};
	const schema = yup.object({
		Name: yup.string().required(),
		Email: yup.string().email().required(),
		Message: yup.string().required()
	});
	const { form, errors, isValid } = createForm({
		extend: validator({ schema }),
		validateSchema: schema
	});
	$: buttonClasses = $isValid ? 'cursor-pointer bg-pink-300 hover:bg-pink-200' : 'bg-gray-300';
</script>

<svelte:head>
	<script src="https://www.google.com/recaptcha/api.js" async defer></script>
</svelte:head>

<form use:form on:submit|preventDefault={handleSubmit} class="w-full flex flex-col gap-y-2">
	<label for="Name" class="required">Name</label>
	<input type="text" class="p-2 rounded" name="Name" bind:value={name} />
	{#if $errors.Name}
		<span>{$errors.Name}</span>
	{/if}
	<label for="Email" class="required">Email</label>
	<input type="text" class="p-2 rounded" name="Email" bind:value={email} />
	{#if $errors.Email}
		<span>{$errors.Email}</span>
	{/if}
	<label for="Message" class="required">Leave a Message!</label>
	<textarea name="Message" class="p-2 rounded" cols="40" rows="5" bind:value={message} />
	{#if $errors.Message}
		<span>{$errors.Message}</span>
	{/if}
	<button
		type="submit"
		disabled={!$isValid}
		class="rounded py-2 mt-4 w-80 self-center {buttonClasses}">Send Message</button
	>
	<div
		class="g-recaptcha"
		id="recaptcha"
		data-sitekey={PUBLIC_RECAPTCHA_SITE_KEY}
		data-callback="handleCaptchaCallback"
		data-expired-callback="resetCaptcha"
		data-error-callback="handleCaptchaError"
		data-size="invisible"
	/>
</form>
{#if res.message !== undefined}
	{res.message}
{/if}

<style>
	.required:after {
		content: ' *';
	}
</style>

<script>
	import { VtmnCard } from '@vtmn/svelte';
</script>

<div class="vtmn-flex vtmn-h-full vtmn-justify-center vtmn-items-center">
	<div class="card">
		<VtmnCard variant="top-image" headingLevel={4} title="Card Title">
			<div slot="img">
				<img
					src="https://storage.googleapis.com/dkt-design-cdn/images/landscape-placeholder.jpg"
					alt="placeholder"
				/>
			</div>
			<div slot="content">
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id qui fuga odio suscipit maxime
					nemo obcaecati ea error consequuntur praesentium molestiae assumenda ex dolore animi non
					voluptatibus modi, accusamus doloribus!
				</p>
			</div>
		</VtmnCard>
	</div>
</div>

<style>
	.card {
		max-width: 300px;
		height: auto;
	}
</style>

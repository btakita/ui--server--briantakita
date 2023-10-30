import { Atb, Attribution } from '@btakita/ui--server--blog'
import { type Ctx } from '@ctx-core/object'
import { type VoidProps } from 'solid-js'
export function Attribution_neurons($p:VoidProps<{
	ctx:Ctx
}>) {
	return (
		<Attribution ctx={$p.ctx} attribution_id="/assets/images/neurons.jpg">
			<Atb href="http://www.flickr.com/photos/hmmmmm/3903176411/">
				From Parthiv Haldipur
			</Atb>
			—
			<Atb href="https://creativecommons.org/licenses/by-nc/2.0/" rel="external nofollow">
				Licensed under Creative Commons
			</Atb>
		</Attribution>
	)
}

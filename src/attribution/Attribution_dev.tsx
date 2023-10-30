import { Atb, Attribution } from '@btakita/ui--server--blog'
import { type Ctx } from '@ctx-core/object'
import { type VoidProps } from 'solid-js'
export function Attribution_dev($p:VoidProps<{
	ctx:Ctx
}>) {
  return (
		<Attribution ctx={$p.ctx} attribution_id="/assets/images/dev.svg">
			<Atb href="https://github.com/satnaing/astro-paper">
				Astro Paper
			</Atb>
			—
			<Atb href="https://github.com/satnaing/astro-paper/blob/main/LICENSE">
				MIT License
			</Atb>
		</Attribution>
	)
}

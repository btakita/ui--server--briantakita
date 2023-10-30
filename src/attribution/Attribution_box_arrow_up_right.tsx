import { Atb, Attribution } from '@btakita/ui--server--blog'
import { type Ctx } from '@ctx-core/object'
import { type VoidProps } from 'solid-js'
export function Attribution_box_arrow_up_right($p:VoidProps<{
	ctx:Ctx
}>) {
  return (
		<Attribution ctx={$p.ctx} attribution_id="/assets/images/box-arrow-up-right.svg">
			<Atb href="https://icons.getbootstrap.com/icons/box-arrow-up-right/">
				icons.getbootstrap.com
			</Atb>
			—
			<Atb href="https://getbootstrap.com/docs/4.0/about/license/">
				MIT License
			</Atb>
		</Attribution>
	)
}

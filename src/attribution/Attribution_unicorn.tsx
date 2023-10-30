import { Atb, Attribution } from '@btakita/ui--server--blog'
import { type Ctx } from '@ctx-core/object'
import { type VoidProps } from 'solid-js'
export function Attribution_unicorn($p:VoidProps<{
	ctx:Ctx
}>) {
	return (
		<Attribution ctx={$p.ctx} attribution_id="/assets/images/unicorn.jpg">
			<Atb href="https://www.deviantart.com/angel35w/art/Unicorn-Pukes-Rainbow-126388773">
				© 2009 - 2023 Angel35W
			</Atb>
		</Attribution>
	)
}

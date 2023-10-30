import { Atb, Attribution } from '@btakita/ui--server--blog'
import { type Ctx } from '@ctx-core/object'
import { type VoidProps } from 'solid-js'
export function Attribution_feeling_abstraction($p:VoidProps<{
	ctx:Ctx
}>) {
  return (
		<Attribution ctx={$p.ctx} attribution_id="/assets/images/feeling-abstraction.jpg">
			{`Originally from `}
			<Atb href="http://haiphonghoaphuongdo.blogspot.com/2011/07/colorful-vector-abstraction.html">
				Original article
			</Atb>
			—
			<Atb href="http://2.bp.blogspot.com/-_t6mHvuNOTs/Th23RDI-RgI/AAAAAAAAAL0/T_VMdr6wIcY/s1600/abstract-vector-free-art.jpg">
				Source Image
			</Atb>
			—
			<Atb href="https://2-bp.blogspot.com/2018/09/best-free-stock-photos.html">
				Licensed under Creative Commons CC0
			</Atb>
		</Attribution>
	)
}

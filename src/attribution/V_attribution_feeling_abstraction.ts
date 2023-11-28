import { V_atb, V_attribution } from '@btakita/ui--server--blog'
import { type Ctx } from '@ctx-core/object'
import { type relement_env_T } from 'relementjs'
export function V_ttribution_feeling_abstraction<env_T extends relement_env_T>(
	{ ctx }:{ ctx:Ctx }
) {
	return (
		V_attribution<env_T>({ ctx, attribution_id: '/assets/images/feeling-abstraction.jpg' },
			'Originally from ',
			V_atb<env_T>({ ctx, href: 'http://haiphonghoaphuongdo.blogspot.com/2011/07/colorful-vector-abstraction.html' },
				'Original article'),
			'—',
			V_atb<env_T>({
					ctx,
					href: 'http://2.bp.blogspot.com/-_t6mHvuNOTs/Th23RDI-RgI/AAAAAAAAAL0/T_VMdr6wIcY/s1600/abstract-vector-free-art.jpg'
				},
				'Source Image'),
			'—',
			V_atb<env_T>({ ctx, href: 'https://2-bp.blogspot.com/2018/09/best-free-stock-photos.html' },
				'Licensed under Creative Commons CC0'))
	)
}

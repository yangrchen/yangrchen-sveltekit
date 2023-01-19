import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
    // try {
    //     const res = await fetch(
    //         'https://ik.imagekit.io/njmlmvvtw/megan__3__f_QnVOchi.png'
    //     );
    //     console.log('1');
    //     console.log(res);
    //     if (res.ok) {

    //         const data = await res.;
    //         return {
    //             artwork: data
    //         }
    //     }
    // } catch (err) {
    //     console.log(err);
    // }

};

export const actions: Actions = {
    default: async ({ request }) => {
        let res = await request.formData();
        let data = res.get('file');
        console.log({ data });
    }
};
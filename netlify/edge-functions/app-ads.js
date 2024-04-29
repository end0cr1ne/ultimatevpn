export default () => {
    const lines = [
        'ad.plus, 352379, DIRECT #Video #Display',
        'google.com, pub-2610964203515025, DIRECT, f08c47fec0942fa0',
        'google.com, pub-2393320645055022, RESELLER, f08c47fec0942fa0',
        'teads.tv, 21034, DIRECT, 15a9c44f6d26cbe1',
        'indexexchange.com, 183592, RESELLER, 50b1c356f2c5c8fc',
        'indexexchange.com, 195049, RESELLER, 50b1c356f2c5c8fc',
        'Appnexus.com, 1371, RESELLER, f5ab79cb980f11d1',
        'stroeer.com, 17580, DIRECT',
        'adform.com, 2148, RESELLER, 9f5210a2f0999e32',
        'rubiconproject.com, 22884, DIRECT, 0bfd66d529a55807',
        'Media.net, 8CUGIC7K8, DIRECT',
        'mgid.com, 640737, DIRECT, d4c29acad76ce94f',
        'themediagrid.com, J8FXQA, DIRECT, 35d5010d7789b49d',
        'sovrn.com, 372166, DIRECT, fafdf38b16bf6b2b',
        'lijit.com, 372166, DIRECT, fafdf38b16bf6b2b',
        'lijit.com, 372166-eb, DIRECT, fafdf38b16bf6b2b',
        'sonobi.com, 0bbef5b956, DIRECT, d1a215d9eb5aee9e',
        'contextweb.com, 560606, RESELLER, 89ff185a4c4e857c',
        'triplelift.com, 12404, DIRECT, 6c33edb13117fd86',
        'triplelift.com, 12404-EB, DIRECT, 6c33edb13117fd86',
        'inmobi.com, 96b0c131516c4ce58d293ec158228a2f, DIRECT, 83e75a7ae333ca9d']

    let final = `facebook.com, 1304663056894877, RESELLER, c3e20eee3f780d68

`
    final += lines.filter(l => Math.random() < 0.70).join('\n')

    return new Response(final);
}
// export const config = { path: "/app-ads.txt" };
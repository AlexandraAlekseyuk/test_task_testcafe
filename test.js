import {Selector} from 'testcafe';

fixture`Petstore tests`
    .page`https://petstore.swagger.io/#/`;
test('POST /pet positive scenario', async t => {
    const expectedText = '{\n' +
        '  "category": {\n' +
        '    "id": 0,\n' +
        '    "name": "string"\n' +
        '  },\n' +
        '  "name": "test request with testcafe",\n' +
        '  "photoUrls": [\n' +
        '    "string"\n' +
        '  ],\n' +
        '  "tags": [\n' +
        '    {\n' +
        '      "id": 0,\n' +
        '      "name": "string"\n' +
        '    }\n' +
        '  ],\n' +
        '  "status": "available"\n' +
        '}'


    await t
        .click('#operations-pet-addPet')
        .click('.try-out')
        .click('.body-param__text')
        .typeText('.body-param__text', expectedText, {replace: true})
        .click('.execute-wrapper');

    await t
        .expect(Selector('.responses-wrapper > .opblock-section-header > h4').textContent).eql('Responses', 'element text contains Responses')
        .expect(Selector('.request-url').textContent).contains('https://petstore.swagger.io/v2/pet', 'element text contains url')
        .expect(Selector('.response>.response-col_status').textContent).contains('200', 'element text contains status code OK')

    const responseBody = await Selector('code.language-json').textContent;
    const jsonResponseBody = JSON.parse(responseBody);

    await t
        .expect(jsonResponseBody.category.id).eql(0, 'category check: id = 0')
        .expect(jsonResponseBody.category.name).eql('string', 'category check: name = string')
        .expect(jsonResponseBody.name).eql('test request with testcafe', 'name check: name = test request with testcafe')
        .expect(jsonResponseBody.photoUrls).eql(['string'], 'photoUrls check: photoUrls is array with one element = string')
        .expect(jsonResponseBody.tags[0].id).eql(0, 'tags check: first element id = 0')
        .expect(jsonResponseBody.tags[0].name).eql('string', 'tags check: first element name = string')
        .expect(jsonResponseBody.tags[1]).eql(undefined, 'tags check: second element not exists')
        .expect(jsonResponseBody.status).eql('available', 'status check: status = available')
});

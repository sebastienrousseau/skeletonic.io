# Content Retrieval

Use the GET operation to retrieve information about the content.

## Table 1. Operation descriptions

| Operation details | Description |
|---|---|
| Operation | GET /api.json |
| Purpose | Returns a list of software products |
| HTTP method | GET |
| Resource URI | <https://server_host_name:port_number/api/sam/swinventory/products> |
| Request headers | Header Accept-Language (optional) Values en-US (only English is supported) Used to negotiate the language of the response. If this header is not specified, the content is returned in the server language. |
| Request payload | n/a |
| Request Content-Type | Application/json |
| Normal HTTP response codes | 200 – OK |
| Error HTTP response codes | 400 – “Bad Request” if a query parameter contains errors or is missing |

## **GET** - /api.json

To return a list of all existing content.

## **Method** : `GET`

## **Auth required** : NO

## **Permissions required** : None

## Success Response

## **Code** : `200 OK`

## Request

`GET /api.json HTTP/1.1`

## Request header

`Content-Type: application/json`

## Response header

```json
HTTP/1.1 200 OK
Date: Thu, 10 Jun 2021 22:52:50 GMT
Content-Type: application/json; charset=utf-8
````

## Response body (JSON)

For a user with ID 4321 on the local database but no details have been set yet.

```json
{
    "id": 4321,
    "first_name": "",
    "last_name": "",
    "email": ""
}
```

## CURL

```sh
curl -i -H "Accept: application/vnd.api+json" -H 'Content-Type:application/vnd.api+json' -X GET "https://skeletonic.io/api.json"
curl -X GET "https://skeletonic.io/api.json"
```

## Notes

*   If the User does not have a `UserInfo` instance when requested then one will
  be created for them.

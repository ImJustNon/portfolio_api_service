# Portfolio API Service

ระบบ API ส่งข้อมูลจาก Backend ไป Frontend ต่างๆของผมมมมมมมมมมมมม

### API Routes

```
Activities
GET /api/v1/activities/all
GET /api/v1/activities/byid/:id
GET /api/v1/activities/bycategory/:category

Banners
GET /api/v1/activities/banners/all
GET /api/v1/activities/banners/bycategory/:category

Certificates
GET /api/v1/certificates/all
GET /api/v1/certificates/byid/:id
GET /api/v1/certificates/bycategory/:category

Projects
GET /api/v1/projects/all
GET /api/v1/projects/byid/:id
GET /api/v1/projects/bycategory/:category

Self Informations
GET /api/v1/selfinformations/all
GET /api/v1/selfinformations/bycategory/:category

Socials
GET /api/v1/socials/all
GET /api/v1/socials/byid/:id
GET /api/v1/socials/byname/:name

Stacks
GET /api/v1/stacks/all
GET /api/v1/stacks/byid/:id
GET /api/v1/stacks/bycategory/:category
```

### Installing

Devlopment

```
yarn dev
```

Production

```
yarn build
```
```
yarn start
```

## LOL
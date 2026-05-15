# jsiapo.dev

Personal technical dossier for José Siapo Rodríguez.

## Stack

- Astro
- TypeScript
- Plain CSS
- GitHub Pages target

## Runtime

Use the Node.js version pinned in `.nvmrc`:

```bash
nvm use
```

## Scripts

```bash
npm install
npm run dev
npm run build
```

## Deployment

GitHub Pages is configured through `.github/workflows/deploy.yml`. Every push to `main` builds the Astro site and deploys `dist` with GitHub Actions.

The project includes `public/CNAME` with:

```txt
jsiapo.dev
```

In GitHub, the repository Pages source should be **GitHub Actions**.

## Namecheap DNS

Do not delegate the domain to GitHub and do not change nameservers. Keep Namecheap as DNS provider so existing subdomains can continue pointing to the VPS.

To point only the apex domain `jsiapo.dev` to GitHub Pages, configure these records in Namecheap Advanced DNS:

```txt
Type  Host  Value                TTL
A     @     185.199.108.153      Automatic
A     @     185.199.109.153      Automatic
A     @     185.199.110.153      Automatic
A     @     185.199.111.153      Automatic
AAAA  @     2606:50c0:8000::153 Automatic
AAAA  @     2606:50c0:8001::153 Automatic
AAAA  @     2606:50c0:8002::153 Automatic
AAAA  @     2606:50c0:8003::153 Automatic
```

Optional `www` redirect:

```txt
Type   Host  Value                 TTL
CNAME  www   JSiapoDEV.github.io   Automatic
```

Existing subdomains such as `admin.ugelsanpablo.jsiapo.dev` and `cronomatch.jsiapo.dev` can stay unchanged. Only modify `@` and, optionally, `www`.

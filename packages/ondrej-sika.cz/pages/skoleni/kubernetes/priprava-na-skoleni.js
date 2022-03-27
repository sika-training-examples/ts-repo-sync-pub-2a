import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Příprava na Školení Kubernetes"
    before={
      <div className="alert alert-warning mb-4">
        <p className="mb-0">
          Pokud se Vam nepovede neco nainstalovat, nevadi, udelame to spolu.
          Pripadne mam pro kazdeho ucastnika pripravene VM kde je vse
          pripraveno. Pokud mate jakykoliv dotaz, napiste mi email na:{" "}
          <a href="mailto:ondrej@sika.io">ondrej@sika.io</a>.
        </p>
      </div>
    }
    markdown={`
Na školení Kubernetes je potřeba mít nainstalovaný:

- Git
- Textový editor (doporučuji VS Code)
- \`kubectl\`
- \`helm\`
- \`minikube\`

Pokud chcete, muzete si nainstalovat tyto nastroje, ktere Vam ulehci praci:

- \`slu\` - SikaLabs Utils - https://github.com/sikalabs/slu
- \`training-cli\` - My training utils - https://github.com/ondrejsika/training-cli

Návod na instalaci najdete v článku [Instalace Kubernetes pro lokální vývoj](/kubernetes/instalace).

Po instalaci je dobré ověřit si zda minikube funguje:

\`\`\`
minikube start
kubectl get nodes
\`\`\`

Mělo by to vypsat něco jako:

\`\`\`
ondrej@sika-mac:~$ minikube start
😄  minikube v1.11.0 on Darwin 11.0
✨  Automatically selected the hyperkit driver. Other choices: docker, virtualbox
👍  Starting control plane node minikube in cluster minikube
🔥  Creating hyperkit VM (CPUs=2, Memory=4000MB, Disk=20000MB) ...
❗  This VM is having trouble accessing https://k8s.gcr.io
💡  To pull new external images, you may need to configure a proxy: https://minikube.sigs.k8s.io/docs/reference/networking/proxy/
🐳  Preparing Kubernetes v1.18.3 on Docker 19.03.8 ...
🔎  Verifying Kubernetes components...
🌟  Enabled addons: default-storageclass, storage-provisioner
🏄  Done! kubectl is now configured to use "minikube"
ondrej@sika-mac:~$ kubectl get nodes
NAME       STATUS   ROLES    AGE   VERSION
minikube   Ready    master   69s   v1.18.3
\`\`\`

Potom minikube pouze vypněte (ať máte vše připravené na školení)

\`\`\`
minikube stop
\`\`\`
`}
  />
);

export default Page;

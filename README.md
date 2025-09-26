# 🌐 Portfolio Website

Kendi kişisel portfolyo sitemi bu repository üzerinde barındırıyorum.  
Bu proje ile yazılım geliştirme sürecimi, becerilerimi ve çalışmalarımı sergilemeyi hedefledim.  

---

## 🛠️ Teknolojiler

- **Frontend:** HTML5, CSS3, JavaScript  
- **Containerization:** Docker  
- **CI/CD:** Jenkins + GitHub Webhook  
- **Registry:** DockerHub  

---

## 📦 Çalıştırma

Projeyi yerelde çalıştırmak için:

```bash
git clone https://github.com/<kullanıcı-adınız>/portfolio-site.git
cd portfolio-site
docker build -t portfolio-site .
docker run -p 8080:80 portfolio-site

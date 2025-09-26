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

---
Tarayıcıdan http://localhost:8080 adresine giderek görebilirsiniz.

# 🔄 CI/CD Senaryosu
Bu repo, Jenkins pipeline ile otomatik olarak build edilip DockerHub’a gönderilmektedir:

GitHub’a push yapıldığında Jenkins tetiklenir

Jenkins yeni image oluşturur

DockerHub’a push eder

# 📖 Detaylı Anlatım
Projenin nasıl yapıldığını görmek ve süreci adım adım anlamak için Medium yazımı okuyabilirsiniz:
👉 Medium Profilim

📬 İletişim
Eğer proje ile ilgili sorularınız olursa bana ulaşabilirsiniz:

LinkedIn: www.linkedin.com/in/muhammed-sai̇t-bütün


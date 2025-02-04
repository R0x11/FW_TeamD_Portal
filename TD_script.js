{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // script.js\
document.addEventListener('DOMContentLoaded', function() \{\
    // Select all navigation links and pages\
    const navLinks = document.querySelectorAll('.nav-link');\
    const pages = document.querySelectorAll('.page');\
\
    // Add click event listeners to each navigation link\
    navLinks.forEach(link => \{\
        link.addEventListener('click', function(e) \{\
            e.preventDefault(); // Prevent default link behavior\
\
            // Remove 'active' class from all pages\
            pages.forEach(page => \{\
                page.classList.remove('active');\
            \});\
\
            // Hide all pages\
            pages.forEach(page => \{\
                page.style.display = 'none';\
            \});\
\
            // Show the target page based on the clicked link's href\
            const targetPage = document.querySelector(this.getAttribute('href'));\
            targetPage.classList.add('active');\
            targetPage.style.display = 'block';\
\
            // Remove 'active' class from all navigation links\
            navLinks.forEach(link => \{\
                link.classList.remove('active');\
            \});\
\
            // Add 'active' class to the clicked navigation link\
            this.classList.add('active');\
        \});\
    \});\
\
    // Default: Show the Home page and activate the Home link\
    document.querySelector('#home').classList.add('active');\
    document.querySelector('#home').style.display = 'block';\
    document.querySelector('[data-page="home"]').classList.add('active');\
\});}
"use client"
import Link from 'next/link';
import React, { useState } from 'react'; 
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbars.css";
import Image from 'next/image';
import Logo from "@/img/Logo14.png"
import { useEffect } from 'react';
import { FaBars, FaTimes, FaChevronUp, FaChevronDown } from 'react-icons/fa';


const Navbars = () => {
    // สร้าง state ใหม่โดยใช้ useState
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
      setClicked(!clicked);
    }
      // ใช้ state เพื่อเปิด/ปิดเมนู dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  }

  // สร้างฟังก์ชันเพิ่มเพื่อปิดเมนู dropdown เมื่อคลิกที่ตำแหน่งอื่น ๆ
  const handleOutsideClick = (e) => {
    if (dropdownOpen && !e.target.closest('.dropdown-menu')) {
      setDropdownOpen(false);
    }
  }

  // เพิ่ม event listener เมื่อคลิกที่ตำแหน่งอื่น ๆ
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    }
  }, [dropdownOpen]);

  return (
    <>
      <nav>
        <div id="logo"><Link href='/'> <Image
      src={Logo}
      width={150}
      style={{marginTop:-55,marginBottom:-55}}
      alt="mahidol logo"
    /></Link></div>
        
        <div>
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <li><Link href='/' className='active'>MU Life pass</Link></li>
            <li><Link href='/somepage'>ประกาศความเป็นส่วนตัว</Link></li>
            <li><a href="#" onClick={handleDropdownClick}>
              ลิงค์ที่เกี่ยวข้อง{' '}
              {dropdownOpen ? <FaChevronUp  /> : <FaChevronDown />}
            </a>
            <ul className="dropdown-menu">
            <li><Link href='/' style={{fontSize:12}}>ช่องทางด้านการติดต่อประสานงานและการลงทะเบียนของนักศึกษา</Link></li>
            <NavDropdown.Divider />
            <li><Link href='/'style={{fontSize:12}}>กรอกทะเบียนประวัตินักศึกษา (E-Profile)</Link></li>
            <NavDropdown.Divider />
            <li><Link href='/'style={{fontSize:12}}>พิมพ์แบบฟอร์มการบริการสุขภาพ</Link></li>
            <NavDropdown.Divider />
            <li><Link href='/'style={{fontSize:12}}>ตรวจสอบสถานะการชำระเงิน</Link></li>
            <NavDropdown.Divider />
            <li><Link href='/'style={{fontSize:12}}>ตรวจสอบรหัสประจำตัวนักศึกษา</Link></li>
            <NavDropdown.Divider />
            <li><Link href='/'style={{fontSize:12}}>ตารางสอน/กลุ่มการเรียนวิชาหมวดศึกษาทั่วไป</Link></li>
            <NavDropdown.Divider />
            <li><Link href='/'style={{fontSize:12}}>ลงทะเบียนนักศึกษา</Link></li>
            <NavDropdown.Divider />
            <li><Link href='/'style={{fontSize:12}}>การจองหอพัก</Link></li>
            <NavDropdown.Divider />
            <li><Link href='/'style={{fontSize:12}}>ข่าวสาร กยศ.</Link></li>
            </ul>
            </li>
            <li>
            <a href="#" onClick={handleDropdownClick}>
              ดาวน์โหลดเอกสาร{' '}
              {dropdownOpen ? <FaChevronUp  /> : <FaChevronDown />}
            </a>
            <ul className="dropdown-menu">
            <li><Link href='/FAQ' style={{fontSize:12}}>คู่มือนักศึกษา 2566</Link></li>
            <NavDropdown.Divider />
            <li><Link href='/' style={{fontSize:12}}>คู่มือแนะนำนักศึกษาใหม่ 2566</Link></li>
            <NavDropdown.Divider />
            <li><Link href='/' style={{fontSize:12}}>ใบคำร้องทั่วไป</Link></li>
            <NavDropdown.Divider />
            <li><Link href='/' style={{fontSize:12}}>ใบคำร้องสำหรับผู้ที่กำลังศึกษา</Link></li>
            <NavDropdown.Divider />
            <li><Link href='/' style={{fontSize:12}}>ใบคำร้องสำหรับผู้ที่สำเร็จศึกษา</Link></li>
            <NavDropdown.Divider />
            <li><Link href='/' style={{fontSize:12}}>หนังสือมอบอำนาจ</Link></li>
            <NavDropdown.Divider />
            <li><Link href='/' style={{fontSize:12}}>ใบมอบอำนาจรับรหัสทำสัญญา e-contact</Link></li>
            <NavDropdown.Divider />
            <li><Link href='/' style={{fontSize:12}}>ใบรับรองการชำระเงินนักศึกษาใหม่</Link></li>
            <NavDropdown.Divider />
            <li><Link href='/' style={{fontSize:12}}>แบบฟอร์มใบลา</Link></li>
            </ul>
            </li>
            <li><a href='http://www.student.mahidol.ac.th/portal/index.html' target='_blank'>Student Protal</a></li>
          </ul>
        </div>

        <div id="moblie" onClick={handleClick}> 
        
        {clicked ? <FaTimes id="bar" style={{ color: '#1a458b' ,marginTop:10}} /> : <FaBars id="bar" style={{ color: '#1a458b',marginTop:10 }} />}

      </div>

      </nav>
    </>
  )
}

export default Navbars
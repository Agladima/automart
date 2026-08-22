import React from 'react'
import { IoCarOutline } from "react-icons/io5"
import { LuLayoutDashboard } from "react-icons/lu"
import { MdOutlineInventory2 } from "react-icons/md"
import { MdOutlineShoppingCart } from "react-icons/md"
import { IoSettingsOutline } from "react-icons/io5"
import { GoShieldLock } from "react-icons/go"
import { BsKey } from "react-icons/bs"
import { IoPhonePortraitOutline } from "react-icons/io5"
import { IoLogOutOutline } from "react-icons/io5"
import { IoIosArrowForward } from "react-icons/io"

const page = () => {
  return (
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: '#F5FAFF',
          paddingTop: '64px',
        }}
      >
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '64px',
          backgroundColor: '#FCF8FF',
          borderBottom: '1px solid #C8C4D9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 32px',
          boxSizing: 'border-box',
          zIndex: 50,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#1A3C6E',
            fontSize: '24px',
            fontWeight: 700,
          }}
        >
          <IoCarOutline size={24} />
          <span>Auto-Naija Mart</span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            color: '#474556',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          <span>Home</span>
          <span>Search</span>
          <span>Chat</span>
          <span>Order</span>
          <span>Profile</span>
        </div>
      </nav>
      <div
        style={{
          display: 'flex',
          minHeight: 'calc(100vh - 64px)',
          backgroundColor: '#FFFFFF',
        }}
      >
        <aside
          style={{
            width: '280px',
            backgroundColor: '#F0ECFB',
            padding: '24px 20px',
            boxSizing: 'border-box',
            position: 'fixed',
            top: '64px',
            left: 0,
            bottom: 0,
            overflowY: 'auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '28px',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#3A00E5',
                color: '#1A3C6E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              A
            </div>
            <div>
              <div
                style={{
                  color: '#1B1A25',
                  fontSize: '16px',
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                Admin Portal
              </div>
              <div
                style={{
                  color: '#474556',
                  fontSize: '11px',
                  fontWeight: 400,
                  lineHeight: 1.2,
                  marginTop: '4px',
                }}
              >
                Automotive Marketplace
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 14px',
                borderRadius: '10px',
                color: '#474556',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              <LuLayoutDashboard size={18} />
              <span>Dashboard</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 14px',
                borderRadius: '10px',
                color: '#474556',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              <MdOutlineInventory2 size={18} />
              <span>Inventory</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 14px',
                borderRadius: '10px',
                color: '#474556',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              <MdOutlineShoppingCart size={18} />
              <span>Orders</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 14px',
                borderRadius: '10px',
                color: '#B5AFFF',
                fontSize: '14px',
                fontWeight: 500,
                backgroundColor: '#3A00E5',
              }}
            >
              <IoSettingsOutline size={18} />
              <span>Settings</span>
            </div>
          </div>
        </aside>
        <main
          style={{
            flex: 1,
            marginLeft: '280px',
            padding: '32px 40px',
            boxSizing: 'border-box',
            backgroundColor: '#F5FAFF',
          }}
        >
          <div
            style={{
              color: '#1B1A25',
              fontSize: '28px',
              fontWeight: 700,
              marginBottom: '8px',
            }}
          >
            Password & Security
          </div>
          <div
            style={{
              color: '#474556',
              fontSize: '14px',
              fontWeight: 400,
              marginBottom: '24px',
            }}
          >
            Keep your account secure and manage your login methods.
          </div>

          <div
            style={{
              width: '768px',
              maxWidth: '100%',
              height: '138px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #C8C4D9',
              borderRadius: '12px',
              padding: '20px 24px',
              boxSizing: 'border-box',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#EAF4FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <GoShieldLock size={22} color="#1A3C6E" />
              </div>
              <div>
                <div
                  style={{
                    color: '#1B1A25',
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: 1.2,
                  }}
                >
                  Account Prottected
                </div>
                <div
                  style={{
                    color: '#474556',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: 1.4,
                    marginTop: '4px',
                  }}
                >
                  Your security is good. Consider enabling 2FA.
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '18px',
                marginBottom: '8px',
              }}
            >
              <div
                style={{
                  color: '#474556',
                  fontSize: '11px',
                  fontWeight: 400,
                }}
              >
                Security Score
              </div>
              <div
                style={{
                  color: '#474556',
                  fontSize: '11px',
                  fontWeight: 400,
                }}
              >
                75%
              </div>
            </div>

            <div
              style={{
                width: '718px',
                maxWidth: '100%',
                height: '8px',
                backgroundColor: '#E5E0EF',
                borderRadius: '999px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: '75%',
                  height: '100%',
                  backgroundColor: '#1A3C6E',
                  borderRadius: '999px',
                }}
              />
            </div>
          </div>

          <div
            style={{
              color: '#1B1A25',
              fontSize: '16px',
              fontWeight: 700,
              marginTop: '28px',
              marginBottom: '12px',
            }}
          >
            SECURITY SETTINGS
          </div>

          <div
            style={{
              width: '768px',
              maxWidth: '100%',
              backgroundColor: '#FFFFFF',
              border: '1px solid #C8C4D9',
              borderRadius: '12px',
              boxSizing: 'border-box',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '18px 24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#EAF4FF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <BsKey size={18} color="#1A3C6E" />
                </div>
                <div>
                  <div
                    style={{
                      color: '#1B1A25',
                      fontSize: '16px',
                      fontWeight: 600,
                      lineHeight: 1.2,
                    }}
                  >
                    Changed Password
                  </div>
                  <div
                    style={{
                      color: '#474556',
                      fontSize: '12px',
                      fontWeight: 400,
                      lineHeight: 1.4,
                      marginTop: '4px',
                    }}
                  >
                    Last changed 3 months ago
                  </div>
                </div>
              </div>
              <div
                style={{
                  color: '#1A3C6E',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                Change
              </div>
            </div>
            <div style={{ height: '1px', backgroundColor: '#E5E0EF' }} />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '18px 24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#EAF4FF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <IoPhonePortraitOutline size={18} color="#1A3C6E" />
                </div>
                <div>
                  <div
                    style={{
                      color: '#1B1A25',
                      fontSize: '16px',
                      fontWeight: 600,
                      lineHeight: 1.2,
                    }}
                  >
                    Two-factor Authentication
                  </div>
                  <div
                    style={{
                      color: '#474556',
                      fontSize: '12px',
                      fontWeight: 400,
                      lineHeight: 1.4,
                      marginTop: '4px',
                    }}
                  >
                    Add and extra layer of security
                  </div>
                </div>
              </div>
              <div
                style={{
                  color: '#1A3C6E',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                Set-up
              </div>
            </div>
          </div>

          <div
            style={{
              color: '#1B1A25',
              fontSize: '16px',
              fontWeight: 700,
              marginTop: '28px',
              marginBottom: '12px',
            }}
          >
            RECENT LOGIN ACTIVITY
          </div>

          <div
            style={{
              width: '768px',
              maxWidth: '100%',
              backgroundColor: '#FFFFFF',
              border: '1px solid #C8C4D9',
              borderRadius: '12px',
              boxSizing: 'border-box',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '18px 24px 16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#22C55E',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <div
                      style={{
                        color: '#1B1A25',
                        fontSize: '16px',
                        fontWeight: 600,
                        lineHeight: 1.2,
                      }}
                    >
                      iPhone 14 Pro
                    </div>
                    <div
                      style={{
                        padding: '2px 8px',
                        borderRadius: '4px',
                        backgroundColor: '#3A00E5',
                        color: '#B5AFFF',
                        fontSize: '11px',
                        fontWeight: 500,
                      }}
                    >
                      Current
                    </div>
                  </div>
                  <div
                    style={{
                      color: '#474556',
                      fontSize: '12px',
                      fontWeight: 400,
                      lineHeight: 1.4,
                      marginTop: '4px',
                    }}
                  >
                    Lagos, Nigeria <span style={{ margin: '0 6px' }}>•</span> Just now
                  </div>
                </div>
              </div>
            </div>
            <div style={{ height: '1px', backgroundColor: '#E5E0EF' }} />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '18px 24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#E5E0EF',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      color: '#1B1A25',
                      fontSize: '16px',
                      fontWeight: 600,
                      lineHeight: 1.2,
                    }}
                  >
                    MacBook Pro M2
                  </div>
                  <div
                    style={{
                      color: '#474556',
                      fontSize: '12px',
                      fontWeight: 400,
                      lineHeight: 1.4,
                      marginTop: '4px',
                    }}
                  >
                    Lagos, Nigeria <span style={{ margin: '0 6px' }}>•</span> 2 days ago
                  </div>
                </div>
              </div>
              <div
                style={{
                  color: '#1A3C6E',
                  cursor: 'pointer',
                }}
              >
                <IoLogOutOutline size={18} />
              </div>
            </div>
          </div>

          <div
            style={{
              width: '768px',
              maxWidth: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '8px',
              paddingRight: '24px',
              boxSizing: 'border-box',
            }}
          >
            <div
              style={{
                color: '#1A3C6E',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              View All Sessions
            </div>
          </div>

          <div
            style={{
              color: '#BA1A1A',
              fontSize: '14px',
              fontWeight: 500,
              marginTop: '28px',
              marginBottom: '12px',
            }}
          >
            DANGER ZONE
          </div>

          <div
            style={{
              width: '768px',
              maxWidth: '100%',
              height: '74px',
              backgroundColor: '#FFF1F0',
              border: '1px solid #BA1A1A',
              borderRadius: '12px',
              padding: '12px 24px',
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  color: '#1B1A25',
                  fontSize: '16px',
                  fontWeight: 600,
                  lineHeight: 1.2,
                }}
              >
                Deactivate Account
              </div>
              <div
                style={{
                  color: '#474556',
                  fontSize: '12px',
                  fontWeight: 400,
                  lineHeight: 1.4,
                }}
              >
                Temporarily disable your account
              </div>
            </div>
            <div
              style={{
                color: '#1A3C6E',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <IoIosArrowForward size={18} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default page

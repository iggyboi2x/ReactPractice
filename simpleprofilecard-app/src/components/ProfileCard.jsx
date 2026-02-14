function ProfileCard({ name, course, bio }) {
  return (
    <>
      <div className="profilecard">
        <img
          className="img"
          src="https://imgs.search.brave.com/Wh7uVW5kotMuyAUKzh8qvBWpQR3ZjYz2y1VAm9T4v94/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mL2Qx/MDEyNmYyLTMwYmMt/NDMxMS05ODQwLTE3/MmExYTFiYTFiMC9k/OGVnY2V1LTRkNzk4/OGU2LWYyMGItNGU2/YS1hYjIwLWNkZjY3/NTZlYTc0Yi5wbmcv/djEvZml0L3dfMzc1/LGhfMjg0L2Vtb3Rp/Z3V5X2VhdGluZ19m/ZWV0X3Bvdl9ieV9q/YXRla19hX2xhYl9k/OGVnY2V1LTM3NXcu/cG5nP3Rva2VuPWV5/SjBlWEFpT2lKS1Yx/UWlMQ0poYkdjaU9p/SklVekkxTmlKOS5l/eUp6ZFdJaU9pSjFj/bTQ2WVhCd09qZGxN/R1F4T0RnNU9ESXlO/alF6TnpOaE5XWXda/RFF4TldWaE1HUXlO/bVV3SWl3aWFYTnpJ/am9pZFhKdU9tRndj/RG8zWlRCa01UZzRP/VGd5TWpZME16Y3pZ/VFZtTUdRME1UVmxZ/VEJrTWpabE1DSXNJ/bTlpYWlJNlcxdDdJ/bWhsYVdkb2RDSTZJ/anc5T0RneUlpd2lj/R0YwYUNJNklpOW1M/MlF4TURFeU5tWXlM/VE13WW1NdE5ETXhN/UzA1T0RRd0xURTNN/bUV4WVRGaVlURmlN/QzlrT0dWblkyVjFM/VFJrTnprNE9HVTJM/V1l5TUdJdE5HVTJZ/UzFoWWpJd0xXTmta/alkzTlRabFlUYzBZ/aTV3Ym1jaUxDSjNh/V1IwYUNJNklqdzlN/VEUyTmlKOVhWMHNJ/bUYxWkNJNld5SjFj/bTQ2YzJWeWRtbGpa/VHBwYldGblpTNXZj/R1Z5WVhScGIyNXpJ/bDE5LkpXUXNTa0JC/WjlLR2hTcjVYZFZG/WFM2azBscFZNN0xx/bWE0MHR3WGFNOWs"
          alt=""
        />
        <div className="info">
          <h1>
            {name}'s Profile Card
            <hr />
          </h1>
          <h4>
            Hi! My name is {name}, a {course} student
            <br />
            {bio}
          </h4>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;

<script setup lang="ts">
import bannerImg from "~/assets/img/5.jpg";
</script>

<template>
    <div class="page">
        <AppBaner :imgPath="bannerImg" />
        <section>
            <p style="text-align: center">
                Intern in the field of Data Management | Web developer
            </p>
        </section>

        <!-- Work -->
        <section style="border: 1px dashed azure">
            <SectionBanner
                iconName="heroicons-solid:briefcase"
                bannerName="Work Experience"
            />
            <section class="job_container">
                <div class="job_header_container">
                    <div class="job_header_box">
                        <div class="point" />
                        <div class="job_header">Sii Poland</div>
                    </div>

                    <div class="job_date">AUGUST 2025 - ONGOING</div>
                </div>
                <section class="job_decription_container">
                    <p>Intern in the field of Data Management</p>
                    <p>
                        <b>Responsibilities:</b><br />
                        Updating, confirming and retrieving data
                    </p>
                </section>
            </section>

            <section class="job_container">
                <div class="job_header_container">
                    <div class="job_header_box">
                        <div class="point" />
                        <div class="job_header">
                            Tarvos Creation sp. z o. o.
                        </div>
                    </div>

                    <div class="job_date">APRIL 2022 - DECEMBER 2023</div>
                </div>
                <section class="job_decription_container">
                    <p>Web developer</p>
                    <p>
                        <b>Responsibilities:</b><br />
                        Designed and developed responsive websites using
                        WordPress, tailored to client requirements and brand
                        identity.<br />Built and customized e-commerce solutions
                        using WooCommerce, optimizing functionality and user
                        experience.<br />Collaborated within a 4-person IT team,
                        providing technical support and contributing to ongoing
                        project development and troubleshooting.
                    </p>
                </section>
            </section>
        </section>

        <!-- Education -->
        <section style="border: 1px dashed azure">
            <SectionBanner
                iconName="heroicons-solid:academic-cap"
                bannerName="Education"
            />

            <section class="job_container">
                <div class="job_header_container">
                    <div class="job_header_box">
                        <div class="point" />
                        <div class="job_header">Universidad del Pais Vasco</div>
                    </div>

                    <div class="job_date">January 2025 - June 2025</div>
                </div>
                <section class="job_decription_container">
                    <p><b>Business Administration, Marketing</b></p>
                    <p>Erasmus+</p>
                </section>
            </section>

            <section class="job_container">
                <div class="job_header_container">
                    <div class="job_header_box">
                        <div class="point" />
                        <div class="job_header">University of Warsaw</div>
                    </div>

                    <div class="job_date">
                        October 2024 - June 2026 (planned)
                    </div>
                </div>
                <section class="job_decription_container">
                    <p><b>Master of Business Management</b></p>
                    <p><b>Specialization:</b> Marketing Management</p>
                </section>
            </section>

            <section class="job_container">
                <div class="job_header_container">
                    <div class="job_header_box">
                        <div class="point" />
                        <div class="job_header">University of Warsaw</div>
                    </div>

                    <div class="job_date">October 2020 - September 2024</div>
                </div>
                <section class="job_decription_container">
                    <p><b>Bachelor of Business Management</b></p>
                    <p><b>Specialization:</b> E-commerce Management</p>
                </section>
            </section>

            <section class="job_container">
                <div class="job_header_container">
                    <div class="job_header_box">
                        <div class="point" />
                        <div class="job_header">
                            Universidad Rey Juan Carlos
                        </div>
                    </div>

                    <div class="job_date">January 2024 - May 2024</div>
                </div>
                <section class="job_decription_container">
                    <p>
                        <b
                            >Business Administration and Management, Marketing
                        </b>
                    </p>
                    <p>Erasmus+</p>
                </section>
            </section>

            <section class="job_container">
                <div class="job_header_container">
                    <div class="job_header_box">
                        <div class="point" />
                        <div class="job_header">
                            Warsaw University of Life Sciences
                        </div>
                    </div>

                    <div class="job_date">October 2020 - February 2024</div>
                </div>
                <section class="job_decription_container">
                    <p><b>Bachelor of Engineering in Computer Science</b></p>
                    <p>
                        <b>Specialization:</b> Information Systems Engineering
                    </p>
                </section>
            </section>
        </section>

        <!-- Skills -->
        <section style="border: 1px dashed azure">
            <SectionBanner
                iconName="heroicons-solid:wrench"
                bannerName="Skills"
            />

            <div class="grid">
                <div>
                    <div style="text-align: center">
                        <Icon
                            name="heroicons-solid:user-group"
                            size="25px"
                            style="color: azure"
                        />
                    </div>
                    <p style="text-align: center"><b>Soft</b></p>
                    <div style="margin-left: 55px">
                        <ul>
                            <li>Communication skills</li>
                            <li>Leadership</li>
                            <li>Teamwork</li>
                            <li>Time Management</li>
                            <li>Creativity</li>
                            <li>Empathy</li>
                            <li>High personal culture</li>
                            <li>Critical Thinking</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div style="text-align: center">
                        <Icon
                            name="heroicons-solid:cpu-chip"
                            size="25px"
                            style="color: azure"
                        />
                    </div>
                    <p style="text-align: center"><b>Hard</b></p>
                    <div
                        style="
                            margin-left: 55px;
                            display: flex;
                            flex-direction: row;
                            justify-content: space-around;
                        "
                    >
                        <ul>
                            <li>HTML</li>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>C#</li>
                            <li>React Native</li>
                            <li>Python</li>
                            <li>GitHub</li>
                            <li>MS Word</li>
                        </ul>
                        <ul>
                            <li>MS Excel</li>
                            <li>PowerBI</li>
                            <li>Canva</li>
                            <li>Adonis</li>
                            <li>WordPress</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Languages -->
        <section style="border: 1px dashed azure">
            <SectionBanner
                iconName="heroicons-solid:chat-bubble-left-right"
                bannerName="Languages"
            />

            <section style="display: flex; justify-content: center;">
                <ul>
                    <li>Polish (Native)</li>
                    <li>English (Fluent)</li>
                    <li>Spanish (pre-intermediate)</li>
                    <li>German (Basic)</li>
                </ul>
            </section>
        </section>

        <!-- Hobby -->
        <section style="border: 1px dashed azure">
            <SectionBanner
                iconName="heroicons-solid:emoji-happy"
                bannerName="Hobby"
            />
        </section>
    </div>
</template>

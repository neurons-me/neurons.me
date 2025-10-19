from setuptools import setup, find_packages

setup(
    name='neurons.me',
    version='0.1.0',
    author='suiGn',
    description='Neurons.me library for Python',
    long_description=open('README.md').read(),
    long_description_content_type='text/markdown',
    packages=find_packages(),
    classifiers=[
        'Programming Language :: Python :: 3',
    ],
    python_requires='>=3.6',
)
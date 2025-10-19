from setuptools import setup, find_packages

setup(
    name='neurons.me',
    version='0.1.3',
    author='suiGn',
    url='https://github.com/neurons-me/neurons.me',
    description='Python package for neurons.me — enabling deep learning processes and modular neural computation.',
    long_description=open('README.md').read(),
    long_description_content_type='text/markdown',
    packages=find_packages(),
    classifiers=[
        'Programming Language :: Python :: 3',
    ],
    python_requires='>=3.6',
)